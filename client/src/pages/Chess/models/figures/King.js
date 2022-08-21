import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";
import { colors } from "../Colors";

export class King extends Figure {
  constructor(color, cell) {
    super(color, cell);
    this.logo = color === colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  canMove(target) {
    if (!super.canMove(target)) return false;
    return true;
  }
}
