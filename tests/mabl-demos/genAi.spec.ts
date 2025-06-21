import { expect, test } from "../fixtures";

test('Evaluate a GenAI assertion to validate the state of a page', async ({
  page,
  mabl,
}) => {
  await page.goto('https://www.mabl.com/ja/');

  const prompt =
    '表示されているWebページがUIテストを自動化するmablという企業の日本語サイトかどうかを検証し、検証結果を日本語で通知。';
  const result = await mabl.evaluateGenAiAssertion(page, prompt);
  console.log('GEN AI EXPLANATION');
  console.log(result.explanation);
  expect(result.success).toBe(true);
});
