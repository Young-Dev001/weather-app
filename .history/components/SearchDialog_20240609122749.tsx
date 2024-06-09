import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import { Button } from "./ui/button"
import { TextSearch } from "lucide-react"
  



function SearchDialog() {
  return (
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline"
    className="border inline-flex items-center justify-center text-sm font-medium hover:dark:bg-[#000000] hover:light:bg-[#c61b1b]">
        <p className="text-sm text-muted-foreground">
          Search city...{" "}
          <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded  px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 hover:bg-primary md:ml-28">
          <TextSearch />
          </kbd>
        </p>
    </Button>
  </DialogTrigger>

</Dialog>

  )
}

export default SearchDialog