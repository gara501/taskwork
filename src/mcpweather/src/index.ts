import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const NWS_API_BASE = "https://api.weather.gov";
const server = new McpServer({ name: "weather", version: "1.0.0" });

async function makeNWSRequest<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "weather-app/1.0",
        Accept: "application/geo+json",
      },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

server.registerTool(
  "get_forecast",
  {
    description: "Get weather forecast for a US location",
    inputSchema: {
      latitude: z.number().describe("Latitude"),
      longitude: z.number().describe("Longitude"),
    },
  },
  async ({ latitude, longitude }) => {
    const points = await makeNWSRequest<any>(
      `${NWS_API_BASE}/points/${latitude},${longitude}`,
    );
    if (!points)
      return {
        content: [{ type: "text", text: "No se pudo obtener el pronóstico." }],
      };
    const forecast = await makeNWSRequest<any>(points.properties.forecast);
    const text = forecast.properties.periods
      .slice(0, 5)
      .map(
        (p: any) =>
          `${p.name}: ${p.temperature}°${p.temperatureUnit}, ${p.shortForecast}`,
      )
      .join("\n");
    return { content: [{ type: "text", text }] };
  },
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Weather MCP Server corriendo en stdio");
}
main();
