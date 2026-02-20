const WP_GRAPHQL_ENDPOINT =
  process.env.WP_GRAPHQL_ENDPOINT ??
  "https://lightgoldenrodyellow-otter-168430.hostingersite.com/graphql";

export async function getWpNodeByUri(uri, revalidate = 60) {
  const query = `
    query GetNodeByUri($uri: String!) {
      nodeByUri(uri: $uri) {
        __typename
        ... on Post {
          title
          content
        }
        ... on Page {
          title
          content
        }
      }
    }
  `;

  const response = await fetch(WP_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { uri },
    }),
    next: { revalidate },
  });

  if (!response.ok) {
    throw new Error(`WordPress GraphQL feilet med status ${response.status}`);
  }

  const data = await response.json();

  if (data?.errors?.length) {
    throw new Error(data.errors[0]?.message ?? "Ukjent GraphQL-feil");
  }

  const node = data?.data?.nodeByUri;
  if (!node?.content) {
    return null;
  }

  return {
    title: node.title ?? "",
    content: node.content,
  };
}
