import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="flex flex-col items-center gap-6 text-center max-w-md">

        {/* Wordmark */}
        <div className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 2L26 9V19L14 26L2 19V9L14 2Z" fill="#FF3621" />
            <path d="M14 7L21 11V17L14 21L7 17V11L14 7Z" fill="white" fillOpacity="0.9" />
          </svg>
          <span className="text-base font-semibold text-foreground tracking-tight">
            Designer Starter Kit
          </span>
          <Badge variant="indigo">DuBois</Badge>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold text-foreground">
            Build Databricks UIs with confidence
          </h1>
          <p className="text-sm text-muted-foreground">
            shadcn/ui themed with DuBois tokens. Claude Code pre-configured to generate on-brand components.
          </p>
        </div>

        <div className="flex gap-2">
          <Button asChild>
            <Link href="/design-system">View design system</Link>
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
