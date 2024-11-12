"use client";
import { useLazyI18n } from "i18n-lazy";
import { Link } from "lucide-react";
import React from "react";

const Footer = () => {
  const { translate } = useLazyI18n();
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between flex-col gap-10 md:flex-row">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              i18n-lazy
            </h3>
            <p className="text-muted-foreground">
              {translate(
                "Simple, fast, and lightweight internationalization for modern web applications."
              )}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {translate("Links")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/docs"
                  className="text-muted-foreground hover:text-primary"
                >
                  {translate("Documentation")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  {translate("Contact")}
                </Link>
              </li>
              <li>
                <Link
                  href="/github"
                  className="text-muted-foreground hover:text-primary"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()}{" "}
            {translate("i18n-lazy. All rights reserved.")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
