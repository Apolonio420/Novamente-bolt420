interface GenerateImageParams {
  prompt: string;
  userId?: string;
}

export async function generateImage({ prompt, userId }: GenerateImageParams) {
  const response = await fetch('https://www.comfydeploy.com/api/run', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8yYnFJdDIwWnp1N0o0d25ZNTlzU2puQ1JhcFYiLCJpYXQiOjE3MjkxMDIxNjV9.hgkEgMWV4D1qwr59clpiT4dcse-Nw37QChvr0_rFi7g'
    },
    body: JSON.stringify({
      deployment_id: 'd55ba2ef-c488-4978-b98a-8bf346a02991',
      inputs: {
        input_text: prompt,
        width: 832,
        height: 1216,
        batch: 1,
        id: userId || 'anonymous'
      }
    })
  });

  if (!response.ok) {
    throw new Error('Failed to generate image');
  }

  return response.json();
}