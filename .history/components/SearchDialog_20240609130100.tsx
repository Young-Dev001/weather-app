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
          className="border inline-flex items-center justify-center text-sm font-medium ease-in-out duration-200 hover:bg-slate-100 dark:hover:bg-[#0b0b0b]"
        >
          <TextSearch className="mr-2 text-muted-foreground" />  {/* Add the search icon */}
          <p className="text-sm text-muted-foreground">Search Here...</p>
        </Button>

  </DialogTrigger>
  <DialogContent>
  <Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>Profile</CommandItem>
      <CommandItem>Billing</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

  </DialogContent>

</Dialog>

  )
}

export default SearchDialog