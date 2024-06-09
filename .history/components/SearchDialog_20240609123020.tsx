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
  



function SearchDialog() {
  return (
<Dialog>
  <DialogTrigger asChild>
  <Button
  variant="outline"
  className="border inline-flex items-center justify-center text-sm font-medium hover:bg-[#e9e9e9] dark:hover:bg-[#0b0b0b]"
>
  <p className="text-sm text-muted-foreground">Search Here...</p>
</Button>

  </DialogTrigger>

</Dialog>

  )
}

export default SearchDialog