/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    FileSchema,
    FileSchema$inboundSchema,
    FileSchema$Outbound,
    FileSchema$outboundSchema,
} from "./fileschema.js";
import * as z from "zod";

export type ListFilesOut = {
    data: Array<FileSchema>;
    object: string;
};

/** @internal */
export const ListFilesOut$inboundSchema: z.ZodType<ListFilesOut, z.ZodTypeDef, unknown> = z.object({
    data: z.array(FileSchema$inboundSchema),
    object: z.string(),
});

/** @internal */
export type ListFilesOut$Outbound = {
    data: Array<FileSchema$Outbound>;
    object: string;
};

/** @internal */
export const ListFilesOut$outboundSchema: z.ZodType<
    ListFilesOut$Outbound,
    z.ZodTypeDef,
    ListFilesOut
> = z.object({
    data: z.array(FileSchema$outboundSchema),
    object: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListFilesOut$ {
    /** @deprecated use `ListFilesOut$inboundSchema` instead. */
    export const inboundSchema = ListFilesOut$inboundSchema;
    /** @deprecated use `ListFilesOut$outboundSchema` instead. */
    export const outboundSchema = ListFilesOut$outboundSchema;
    /** @deprecated use `ListFilesOut$Outbound` instead. */
    export type Outbound = ListFilesOut$Outbound;
}
