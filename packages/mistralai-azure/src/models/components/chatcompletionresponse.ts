/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    ChatCompletionChoice,
    ChatCompletionChoice$inboundSchema,
    ChatCompletionChoice$Outbound,
    ChatCompletionChoice$outboundSchema,
} from "./chatcompletionchoice.js";
import {
    UsageInfo,
    UsageInfo$inboundSchema,
    UsageInfo$Outbound,
    UsageInfo$outboundSchema,
} from "./usageinfo.js";
import * as z from "zod";

export type ChatCompletionResponse = {
    id: string;
    object: string;
    model: string;
    usage: UsageInfo;
    created?: number | undefined;
    choices?: Array<ChatCompletionChoice> | undefined;
};

/** @internal */
export const ChatCompletionResponse$inboundSchema: z.ZodType<
    ChatCompletionResponse,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
    object: z.string(),
    model: z.string(),
    usage: UsageInfo$inboundSchema,
    created: z.number().int().optional(),
    choices: z.array(ChatCompletionChoice$inboundSchema).optional(),
});

/** @internal */
export type ChatCompletionResponse$Outbound = {
    id: string;
    object: string;
    model: string;
    usage: UsageInfo$Outbound;
    created?: number | undefined;
    choices?: Array<ChatCompletionChoice$Outbound> | undefined;
};

/** @internal */
export const ChatCompletionResponse$outboundSchema: z.ZodType<
    ChatCompletionResponse$Outbound,
    z.ZodTypeDef,
    ChatCompletionResponse
> = z.object({
    id: z.string(),
    object: z.string(),
    model: z.string(),
    usage: UsageInfo$outboundSchema,
    created: z.number().int().optional(),
    choices: z.array(ChatCompletionChoice$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatCompletionResponse$ {
    /** @deprecated use `ChatCompletionResponse$inboundSchema` instead. */
    export const inboundSchema = ChatCompletionResponse$inboundSchema;
    /** @deprecated use `ChatCompletionResponse$outboundSchema` instead. */
    export const outboundSchema = ChatCompletionResponse$outboundSchema;
    /** @deprecated use `ChatCompletionResponse$Outbound` instead. */
    export type Outbound = ChatCompletionResponse$Outbound;
}
