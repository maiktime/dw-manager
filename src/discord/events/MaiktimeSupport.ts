import Bot from "../Bot"; 
import { Message } from "discord.js";

import EventModule from "../abstract/EventModule"; 
import { ClientEvent } from "../abstract/EventModule";

export default class MaiktimeSupport extends EventModule {
    constructor(bot: Bot) {
      super("MaiktimeSupport", bot);
    }

    
    @ClientEvent("message")
    MaiktimeSupport (message: Message){
        message.channel.send("*H*allo, bra_uche_n sie m~~eine Hilfe?~~ Ich kann nä***mlich** nicht helfen!");  
    }
}
