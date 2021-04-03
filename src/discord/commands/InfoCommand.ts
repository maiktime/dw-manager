import Command, { ReturnValue } from "../abstract/Command";
import { Message, MessageEmbed } from "discord.js";
import { createRandomLightColor } from "../util/RandomColor";
import Bot from "../Bot";

export default class InfoCommand extends Command {
    constructor(bot: Bot, invoke: string) {
        super(bot, invoke, true);
    }

    run(message: Message, _args: string[]): ReturnValue {
        const embed = new MessageEmbed()
            .addField("Bot", "Diese Version wurde für den Server `German Twitch Community` gebaut")
            .addField("Hauptserver", "[DeineWerbung](https://discord.gg/Kmvf9wB)")
            .addField("Entwicklungs URLs", "https://github.com/maiktime/dw-manager (Veränderte Version)\nhttps://github.com/MMNN321/dw-manager (Originalversion)")
            .setThumbnail(this.bot.client.user.avatarURL())
            .setFooter("Bot wird von Bl4ckL1ght entwickelt und gehostet")
            .setColor(createRandomLightColor())
            .setTitle("Informationen");

        message.channel.send(embed);

        return ReturnValue.SUCCESS;
    }
}
