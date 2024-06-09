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
  <Button
          variant="outline"
          className="border inline-flex items-center justify-center text-sm font-medium hover:bg-slate-100 dark:hover:bg-[#0b0b0b]"
        >
          <TextSearch className="mr-2" />  {/* Add the search icon */}
          <p className="text-sm text-muted-foreground">Search Here...</p>
        </Button>

  </DialogTrigger>

</Dialog>

  )
}

export default SearchDialog