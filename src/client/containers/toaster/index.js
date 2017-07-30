import { Position, Toaster } from "@blueprintjs/core";
import './toaster.css';

export const OurToaster = Toaster.create({
    className: 'pt-intent-primary  toaster',
    position: Position.TOP_CENTER,
});