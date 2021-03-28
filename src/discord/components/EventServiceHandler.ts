import ClientEvent from "../abstract/EventModule";
import EventHandler from "./EventHandler";

export default class EventServiceHandler {
    eventHandler: EventHandler;

    constructor(eventHandler: EventHandler) {
        this.eventHandler = eventHandler;
    }

    register(eventService: ClientEvent) {
        const proto = Object.getPrototypeOf(eventService);

        for (const func in proto) {
            if (typeof proto[func] === "function") {
                const funcProto = proto[func].prototype;
                if (funcProto.isEvent) {
                    console.log("Registered event " + funcProto.eventType + " for function " + func + " in module " + eventService.constructor.name);
                    this.eventHandler.addEventListener(funcProto.eventType, proto[func].bind(eventService));
                }
            }
        }
    }
}
