import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
    code: string;
    language?: string;
  }
  
  export function CodeBlock({ code }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);
  
    const copyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    };
  
    return (
      <div className="relative my-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={copyToClipboard}
          className="absolute right-4 top-4 h-6 w-6 bg-background/80 hover:bg-background z-10"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4 text-muted-foreground" />
          )}
        </Button>
        <pre className="relative rounded-lg bg-muted/50 p-4 overflow-x-auto">
          <code className="text-sm text-foreground">{code}</code>
        </pre>
      </div>
    );
  }
  