/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as components from "../components/index.js";
import * as z from "zod";

/**
 * OK
 */
export type JobsApiRoutesFineTuningCreateFineTuningJobResponse =
    | components.LegacyJobMetadataOut
    | components.JobOut;

/** @internal */
export const JobsApiRoutesFineTuningCreateFineTuningJobResponse$inboundSchema: z.ZodType<
    JobsApiRoutesFineTuningCreateFineTuningJobResponse,
    z.ZodTypeDef,
    unknown
> = z.union([components.LegacyJobMetadataOut$inboundSchema, components.JobOut$inboundSchema]);

/** @internal */
export type JobsApiRoutesFineTuningCreateFineTuningJobResponse$Outbound =
    | components.LegacyJobMetadataOut$Outbound
    | components.JobOut$Outbound;

/** @internal */
export const JobsApiRoutesFineTuningCreateFineTuningJobResponse$outboundSchema: z.ZodType<
    JobsApiRoutesFineTuningCreateFineTuningJobResponse$Outbound,
    z.ZodTypeDef,
    JobsApiRoutesFineTuningCreateFineTuningJobResponse
> = z.union([components.LegacyJobMetadataOut$outboundSchema, components.JobOut$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobsApiRoutesFineTuningCreateFineTuningJobResponse$ {
    /** @deprecated use `JobsApiRoutesFineTuningCreateFineTuningJobResponse$inboundSchema` instead. */
    export const inboundSchema = JobsApiRoutesFineTuningCreateFineTuningJobResponse$inboundSchema;
    /** @deprecated use `JobsApiRoutesFineTuningCreateFineTuningJobResponse$outboundSchema` instead. */
    export const outboundSchema = JobsApiRoutesFineTuningCreateFineTuningJobResponse$outboundSchema;
    /** @deprecated use `JobsApiRoutesFineTuningCreateFineTuningJobResponse$Outbound` instead. */
    export type Outbound = JobsApiRoutesFineTuningCreateFineTuningJobResponse$Outbound;
}
