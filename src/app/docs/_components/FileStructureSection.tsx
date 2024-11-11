import { fileStructureData } from "@/lib/constants";
import { FileTree } from "./FileTree";

export function FileStructureSection() {
    return (
      <section id="file-structure" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-semibold text-foreground mb-6">
          Recommended File Structure
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-medium text-foreground mb-4">
              Old Directory Pattern
            </h3>
            <p className="text-muted-foreground mb-4">
              Traditional Next.js app directory structure:
            </p>
            <FileTree data={fileStructureData.old} />
          </div>
  
          <div>
            <h3 className="text-xl font-medium text-foreground mb-4">
              New Directory Pattern with i18n-lazy
            </h3>
            <p className="text-muted-foreground mb-4">
              Recommended directory structure for internationalization:
            </p>
            <FileTree data={fileStructureData.new} />
          </div>
        </div>
      </section>
    );
  }