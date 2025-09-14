import { NextResponse } from "next/server";
import { execSync } from "child_process";

export async function GET() {
  try {
    const lastCommitDate = execSync("git log -1 --format=%cd --date=iso", {
      encoding: "utf8",
      cwd: process.cwd(),
    }).trim();

    const date = new Date(lastCommitDate);

    return NextResponse.json({
      lastCommitDate: date.toISOString(),
      formatted: date.toLocaleDateString("fr-FR"),
    });
  } catch (error) {
    console.error("Erreur lors de la récupération du dernier commit:", error);

    const fallbackDate = new Date();
    return NextResponse.json({
      lastCommitDate: fallbackDate.toISOString(),
      formatted: fallbackDate.toLocaleDateString("fr-FR"),
      fallback: true,
    });
  }
}
