declare module 'plaiceholder' {
  export function getPlaiceholder(
    input: Buffer,
    options?: { size?: number; format?: string },
  ): Promise<{ base64: string }>;
}
