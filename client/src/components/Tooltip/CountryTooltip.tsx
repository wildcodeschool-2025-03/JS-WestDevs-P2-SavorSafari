import {
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
  useHover,
  useInteractions
} from '@floating-ui/react';
import { Children, createContext, useState } from 'react';

import "./CountryTooltip.css";

const CountryTooltipContext = createContext(null);

const CountryTooltip = (Children) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, { move: true });

  /* 
  //To further use
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, {
    // If your reference element has its own label (text).
    role: 'tooltip',
    // If your reference element does not have its own label,
    // e.g. an icon.
    role: 'label',
  }); 
  */

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    /* focus,
    dismiss,
    role, */
  ]);

  return (
    <>
      {/* <div>
      <CountryTooltipTrigger>My trigger</CountryTooltipTrigger>
      <CountryTooltipContent>My tooltip</CountryTooltipContent>
      </div> */}
      <button ref={refs.setReference} {...getReferenceProps()}>
        {Children}
      </button>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          Tooltip element
        </div>
      )}
    </>
  )
}

export default CountryTooltip;
