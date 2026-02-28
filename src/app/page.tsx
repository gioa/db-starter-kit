import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="flex flex-col items-center gap-6 text-center max-w-md">

        {/* Wordmark */}
        <div className="flex items-center gap-2">
          <svg width="16" height="18" viewBox="0 0 300 331" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 translate-y-px">
            <path d="M283.923 136.449L150.144 213.624L6.88995 131.168L0 134.982V194.844L150.144 281.115L283.923 204.234V235.926L150.144 313.1L6.88995 230.644L0 234.458V244.729L150.144 331L300 244.729V184.867L293.11 181.052L150.144 263.215L16.0766 186.334V154.643L150.144 231.524L300 145.253V86.2713L292.536 81.8697L150.144 163.739L22.9665 90.9663L150.144 17.8998L254.641 78.055L263.828 72.773V65.4371L150.144 0L0 86.2713V95.6613L150.144 181.933L283.923 104.758V136.449Z" fill="#FF3621"/>
          </svg>
          <span className="text-base font-semibold text-foreground tracking-tight">
            Databricks UI Starter Kit
          </span>
          <Badge variant="indigo">DuBois</Badge>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold text-foreground">
            Vibe coding Databricks UIs
          </h1>
          <p className="text-sm text-muted-foreground">
            DuBois-themed shadcn/ui components for PMs and designers. Start building without rebuilding.
          </p>
        </div>

        <div className="flex gap-2">
          <Button asChild>
            <Link href="/shell">View shell demo</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/design-system">Design system</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/design-system#icons">Browse icons</Link>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          13px · 4px radius · Helvetica Neue · blue600 primary
        </p>
      </div>
    </div>
  );
}
