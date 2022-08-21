import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-bishop.png";
import whiteLogo from "../../assets/white-bishop.png";
import { colors } from "../Colors";

export class Bishop extends Figure {
  constructor(color, cell) {
    super(color, cell);
    this.logo = color === colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.BISHOP;
  }

  canMove(target) {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyDiagonal(target)) return true;
    return false;
  }
}
