/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type WandbIntegration = {
    type?: "wandb" | undefined;
    /**
     * The name of the project that the new run will be created under.
     */
    project: string;
    /**
     * A display name to set for the run. If not set, will use the job ID as the name.
     */
    name?: string | null | undefined;
    /**
     * The WandB API key to use for authentication.
     */
    apiKey: string;
    runName?: string | null | undefined;
};

/** @internal */
export const WandbIntegration$inboundSchema: z.ZodType<WandbIntegration, z.ZodTypeDef, unknown> = z
    .object({
        type: z.literal("wandb"),
        project: z.string(),
        name: z.nullable(z.string()).optional(),
        api_key: z.string(),
        run_name: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            api_key: "apiKey",
            run_name: "runName",
        });
    });

/** @internal */
export type WandbIntegration$Outbound = {
    type: "wandb";
    project: string;
    name?: string | null | undefined;
    api_key: string;
    run_name?: string | null | undefined;
};

/** @internal */
export const WandbIntegration$outboundSchema: z.ZodType<
    WandbIntegration$Outbound,
    z.ZodTypeDef,
    WandbIntegration
> = z
    .object({
        type: z.literal("wandb").default("wandb" as const),
        project: z.string(),
        name: z.nullable(z.string()).optional(),
        apiKey: z.string(),
        runName: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            apiKey: "api_key",
            runName: "run_name",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WandbIntegration$ {
    /** @deprecated use `WandbIntegration$inboundSchema` instead. */
    export const inboundSchema = WandbIntegration$inboundSchema;
    /** @deprecated use `WandbIntegration$outboundSchema` instead. */
    export const outboundSchema = WandbIntegration$outboundSchema;
    /** @deprecated use `WandbIntegration$Outbound` instead. */
    export type Outbound = WandbIntegration$Outbound;
}
