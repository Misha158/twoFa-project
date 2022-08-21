import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-queen.png";
import whiteLogo from "../../assets/white-queen.png";
import { colors } from "../Colors";

export class Queen extends Figure {
  constructor(color, cell) {
    super(color, cell);
    this.logo = color === colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.QUEEN;
  }

  canMove(target) {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyVertical(target)) return true;
    if (this.cell.isEmptyHorizontal(target)) return true;
    if (this.cell.isEmptyDiagonal(target)) return true;
    return false;
  }
}
