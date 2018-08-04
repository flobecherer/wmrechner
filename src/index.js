import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { computeTable } from "./calcPoints.js";
import { compareGoals, compareGoalsKO } from "./compareGoals.js";
import { getWinner } from "./getWinner.js";
import { GroupPhase } from "./GroupStage";
import { KOStage } from "./KOStage";

ReactDOM.render(<GroupPhase />, document.getElementById("root"));
//ReactDOM.render(<KOStage />, document.getElementById("root"));
