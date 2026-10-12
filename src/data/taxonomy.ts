/**
 * サイト全体で共有する分類とサービス定義。
 * 頼める仕事と受け取れるものを具体的に示し、継続できる運用まで支援する。
 */

import type { KNOWLEDGE_CATEGORIES, SERVICE_IDS } from '../content.config';

export type CategoryId = (typeof KNOWLEDGE_CATEGORIES)[number];
export type ServiceId = (typeof SERVICE_IDS)[number];

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  primaryService: ServiceId;
}

export const categories: Category[] = [
  {
    id: 'shikumika',
    name: '仕組み化',
    description: '属人化、社長依存、引き継ぎ不能を減らし、成果が再現できる事業運営へ変えるための考え方と実践を扱います。',
    primaryService: 'ai-dx',
  },
  {
    id: 'ai',
    name: 'AI・自動化',
    description: 'AIを導入すること自体ではなく、どの業務にどう組み込み、時間・品質・利益をどう改善するかを扱います。',
    primaryService: 'ai-dx',
  },
  {
    id: 'web',
    name: 'Web・営業資産',
    description: 'ホームページを制作物ではなく、見込み客に判断材料を届け続ける営業資産として機能させる方法を扱います。',
    primaryService: 'web',
  },
  {
    id: 'marketing',
    name: '集客・営業',
    description: '紹介や個人営業だけに依存せず、見込み客との接点から問い合わせ・商談までを積み上げる仕組みを扱います。',
    primaryService: 'web',
  },
  {
    id: 'sns',
    name: '発信の仕組み',
    description: 'SNSやコンテンツを担当者のセンスや気合いに依存させず、企画・制作・分析・改善まで回す方法を扱います。',
    primaryService: 'sns',
  },
];

export interface Service {
  id: ServiceId;
  name: string;
  shortName: string;
  en: string;
  summary: string;
  problems: string[];
  deliverables: string[];
  outcome: string;
  ctaLabel: string;
  engagement: string;
  forWho: string;
  clientRole: string;
  scopeNote: string;
  example: {
    title: string;
    problem: string;
    support: string;
    handover: string;
    check: string;
  };
}

export const services: Service[] = [
  {
    id: 'web',
    name: 'ホームページ制作・改善',
    shortName: 'ホームページ',
    en: 'WEBSITE',
    summary: '事業の強み、サービス内容、実績を整理し、相談・問い合わせへ進みやすいホームページを制作・改善します。公開後の更新方法や、問い合わせの計測まで整えます。',
    problems: [
      'サイトを見ても、何を頼めるか伝わらない',
      'サービス内容や実績が古いままになっている',
      'スマートフォンで見にくく、相談方法も分かりにくい',
      'ホームページを新しく作りたい・作り直したい',
      '公開後の更新や問い合わせの確認方法が分からない',
    ],
    deliverables: [
      'サービス・強みを整理したページ構成と原稿',
      'スマートフォンに対応したホームページ・LP',
      'サービス紹介・実績・よくある質問のページ',
      '問い合わせフォームと予約・相談への導線',
      'アクセス・問い合わせの確認方法と更新手順',
    ],
    outcome: '見込み客が「何を頼めるか」「なぜ選ぶか」「どう相談するか」をサイトで確認でき、担当者が情報を更新できる状態を目指します。',
    ctaLabel: 'ホームページについて相談する',
    engagement: '制作・改善／必要に応じて更新支援',
    forWho: 'ホームページを新しく作りたい、または今のサイトを営業・集客に活用したい事業者。',
    clientRole: '事業内容、実績、写真などの素材をご提供いただき、原稿・デザイン・公開内容をご確認いただきます。',
    scopeNote: 'ページ数、原稿作成、写真撮影、修正回数、公開後の更新支援は、お見積もり時に範囲を決めます。',
    example: {
      title: '「サイトを見せても、サービスが伝わらない」',
      problem: '会社紹介はあるものの、頼める仕事や実績、相談までの流れが載っていない。',
      support: 'サービスごとの説明、実績、よくある質問を整理し、問い合わせへ進めるページを制作・改善します。',
      handover: 'ページ構成・原稿・公開したサイト・更新手順',
      check: 'サービスページの閲覧、相談ボタンのクリック、有効な問い合わせを確認します。',
    },
  },
  {
    id: 'sns',
    name: 'SNSの企画・改善支援',
    shortName: 'SNS支援',
    en: 'SNS SUPPORT',
    summary: '社内のSNS担当者と、発信テーマ、投稿企画、プロフィール、予約・問い合わせへの導線を整えます。投稿の添削と結果の振り返りを行い、担当者が継続できる運用を支援します。',
    problems: [
      '何を発信すればよいか毎回悩む',
      '投稿を続けているが、予約や問い合わせにつながらない',
      '社内の担当者に、企画や改善の相談相手がいない',
      '商品・サービスの魅力をどう見せればよいか分からない',
      '担当者が変わると、投稿のやり方が引き継げない',
    ],
    deliverables: [
      '発信テーマと投稿企画表',
      '投稿案の添削・構成の提案',
      'プロフィールと予約・問い合わせ導線の改善案',
      '投稿結果の振り返りと次に試す企画',
      '担当者が使える投稿・確認・引き継ぎの手順',
    ],
    outcome: '担当者が企画に迷いにくくなり、予約・問い合わせなどの目的に照らして、次の投稿や改善を判断できる状態を目指します。',
    ctaLabel: 'SNSの運用について相談する',
    engagement: '継続的な企画・添削・改善支援',
    forWho: '社内にSNS担当者がいて、写真・動画の準備や投稿を進められる企業・店舗。',
    clientRole: '写真・動画などの素材の準備、投稿作成・公開、お客様への返信は、原則として社内でご対応いただきます。',
    scopeNote: '撮影、動画編集、投稿の制作・代行、広告運用、DM対応が必要な場合は、対応可否・範囲・費用を別途確認します。',
    example: {
      title: '「投稿しているけれど、相談につながらない」',
      problem: '商品写真を載せているが、誰に何を伝えるかが曖昧で、投稿後の振り返りもできていない。',
      support: '発信テーマと企画を整理し、投稿案を添削。プロフィールから相談・予約までの流れと、結果の確認方法を整えます。',
      handover: '投稿企画表・添削した投稿案・導線の改善案・振り返りメモ',
      check: '社内で投稿を実行できたか、サイトへの遷移、有効な予約・問い合わせを確認します。',
    },
  },
  {
    id: 'ai-dx',
    name: '問い合わせ・業務の整理',
    shortName: '問い合わせ・業務',
    en: 'OPERATIONS',
    summary: '問い合わせの受付、担当者への引き継ぎ、対応状況の確認を整理します。管理表、返信テンプレート、手順書をつくり、必要に応じて既存ツールやAIを組み合わせます。',
    problems: [
      'メール・フォーム・電話の問い合わせが別々に管理されている',
      '誰が対応中か分からず、返信や確認が漏れる',
      '同じ案内文を毎回、一から書いている',
      '社長や特定の担当者しか、対応手順を知らない',
      'AIを使いたいが、任せる範囲や確認方法が分からない',
    ],
    deliverables: [
      '問い合わせ・業務の流れと担当者の一覧',
      '対応状況を確認する管理表',
      '返信・確認のテンプレート',
      '担当者が使える対応・引き継ぎの手順書',
      '必要に応じた既存ツール・AIの利用手順',
    ],
    outcome: '問い合わせの担当者と対応状況が分かり、別の担当者にも引き継げる状態を目指します。重要な返信や判断には人の確認を残します。',
    ctaLabel: '問い合わせ・業務について相談する',
    engagement: '対象業務を絞った整理・運用支援',
    forWho: '複数の窓口や担当者で問い合わせを受け、対応漏れや引き継ぎに困っている事業者。',
    clientRole: '現在の対応手順をご共有いただき、担当者・確認ルールを決めて、管理表や手順書を実際の業務でご利用いただきます。',
    scopeNote: '対象業務と扱う情報を確認してから、利用するツールや連携方法を決めます。顧客対応の代行や個別システム開発は、別途対応可否を確認します。',
    example: {
      title: '「この問い合わせ、誰が対応している？」',
      problem: 'メールや電話の記録が散らばり、返信待ち・対応中・完了の区別や引き継ぎができていない。',
      support: '受付から返信・引き継ぎまでの流れを整理し、担当者と次の対応が分かる管理表、返信例、手順書をつくります。',
      handover: '問い合わせ管理表・返信テンプレート・担当と引き継ぎの手順書',
      check: '未対応の問い合わせ、確認・引き継ぎの漏れ、実際の対応時間を確認します。',
    },
  },
];

export function getCategory(id: CategoryId): Category {
  const found = categories.find((c) => c.id === id);
  if (!found) throw new Error(`未定義のカテゴリ: ${id}`);
  return found;
}

export function getService(id: ServiceId): Service {
  const found = services.find((s) => s.id === id);
  if (!found) throw new Error(`未定義のサービス: ${id}`);
  return found;
}
