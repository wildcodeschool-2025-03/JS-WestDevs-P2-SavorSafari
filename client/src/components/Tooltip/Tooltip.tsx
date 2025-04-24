import { useState } from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
} from '@floating-ui/react';

import "./Tooltip.css"

const Tooltip = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  return (
    <div>
      <TooltipTrigger>My trigger</TooltipTrigger>
      <TooltipContent>My tooltip</TooltipContent>
    </div>
  )
}

export default Tooltip;
