import {Tooltip} from "@/components/tooltip";
import {socialItems} from "@/lib/config";

export function Footer({
  fullYear = new Date().getFullYear(),
  name = "Marcell Ciszek Druzynski",
}: {
  fullYear?: number;
  name?: string;
}) {
  return (
    <footer className="flex h-24">
      <div className="app-width mx-auto flex flex-1 flex-col items-center gap-3 md:flex-row md:justify-between md:gap-0">
        <small>
          © <time>{fullYear}</time> <span>{name}</span>
        </small>

        <ul className="flex gap-4">
          {socialItems.map((item) => (
            <li key={item.href}>
              <Tooltip content={<p className="text-sm">{item.name}</p>}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:opacity-50 dark:text-gray-300"
                >
                  <item.icon />
                </a>
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
