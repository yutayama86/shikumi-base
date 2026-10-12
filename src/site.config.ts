/**
 * サイト全体の設定値。
 *
 * ここで未設定になっている値は「まだ実在しないもの」です。
 * 架空の連絡先やダミーURLを置かず、値が入った時点でUIが自動的に有効になります。
 */

export const site = {
  name: 'シクミベース',
  url: 'https://shikumi-base.com',
  title: 'シクミベース｜ホームページ制作・SNS企画改善・業務整理',
  description:
    '中小企業・地域事業者のホームページ制作・改善、SNSの企画・添削・分析、問い合わせ・業務の整理を支援します。必要な支援を絞り、担当者が続けられる運用まで整えます。東京・茨城を拠点に、山野辺雄太が運営する事業ブランドです。',
  operator: '山野辺 雄太',
} as const;

export const contact: {
  formPath: string;
  email: string | null;
} = {
  formPath: '/contact/',
  email: 'info@shikumi-base.com',
};

export function ctaHref(topic?: string): string {
  return topic ? `${contact.formPath}?topic=${topic}` : contact.formPath;
}

export const analytics: {
  cloudflareToken: string | null;
  ga4MeasurementId: string | null;
} = {
  cloudflareToken: null,
  ga4MeasurementId: 'G-MZPH9X4CPP',
};
