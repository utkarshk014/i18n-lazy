"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown, Folder, FolderOpen, File } from "lucide-react"
import { cn } from "@/lib/utils"
import { CodeBlock } from "./CodeBlock";

interface FileTreeNode {
  name: string;
  type: "file" | "folder";
  children?: FileTreeNode[];
  content?: string;
}

interface FileTreeProps {
  data: FileTreeNode[];
}

interface FileTreeItemProps {
  node: FileTreeNode;
  level?: number;
}

function FileTreeItem({ node, level = 0 }: FileTreeItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  const isFolder = node.type === "folder"
  const hasChildren = node.children && node.children.length > 0

  return (
    <div>
      <div
        className={cn(
          "flex items-center py-1 px-2 hover:bg-muted/50 rounded-md cursor-pointer text-sm",
          level > 0 && "ml-4"
        )}
        onClick={() => isFolder && setIsOpen(!isOpen)}
      >
        <div className="w-4 h-4 mr-1">
          {isFolder && (
            isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
          )}
        </div>
        <div className="w-4 h-4 mr-2">
          {isFolder ? (
            isOpen ? (
              <FolderOpen className="w-4 h-4 text-blue-500" />
            ) : (
              <Folder className="w-4 h-4 text-blue-500" />
            )
          ) : (
            <File className="w-4 h-4 text-muted-foreground" />
          )}
        </div>
        <span className="text-muted-foreground">{node.name}</span>
      </div>
      {isOpen && hasChildren && (
        <div>
          {node.children?.map((child, index) => (
            <FileTreeItem key={`${child.name}-${index}`} node={child} level={level + 1} />
          ))}
        </div>
      )}
      {isOpen && node.content && (
        <div className="ml-11 mt-2 mb-4">
          <CodeBlock code={node.content} language="typescript" />
        </div>
      )}
    </div>
  )
}

export function FileTree({ data }: FileTreeProps) {
  return (
    <div className="rounded-lg border bg-muted/50 p-4">
      {data.map((node, index) => (
        <FileTreeItem key={`${node.name}-${index}`} node={node} />
      ))}
    </div>
  )
}