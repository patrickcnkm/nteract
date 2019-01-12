// Someday in the future, the notebook format or the message spec might get a new output type. We need to make sure that our
// frontends are able to have a known fallback when an output type isn't known.

// In-memory version
export interface UnrecognizedOutput {
  output_type: "unrecognized";
  raw: any;
}

// On disk
export interface NbformatUnrecognizedOutput {
  output_type: string; // Technically, not one of "execute_result", "display_data", "stream", or "error"
}

const UNRECOGNIZED = "unrecognized";

export function unrecognized(raw: any) {
  return Object.freeze({
    output_type: UNRECOGNIZED,
    raw
  });
}

unrecognized.fromNbformat = function fromNbformat(a: any) {
  return unrecognized(a);
};

unrecognized.fromJupyterMessage = function fromJupyterMessage(a: any) {
  return unrecognized(a);
};
