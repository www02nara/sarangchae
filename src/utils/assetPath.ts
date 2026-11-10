export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === "production" ? "/sarangchae" : "";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
