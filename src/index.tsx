import * as React from "react";
import * as ReactDOM from "react-dom";

import { Calendar } from "./components/Calendar";
import { Service } from "./components/Service";
import { AddEvent } from "./components/AddEvent";

const service = new Service();

ReactDOM.render(
    <Calendar stream={service.stream()} />,
        document.getElementById("calendar")
);

ReactDOM.render(
    <AddEvent add={service.add} />,
        document.getElementById("addevent")
);