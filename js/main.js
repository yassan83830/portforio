(function () {
  'use strict';

  Vue.config.devtools = true;

  var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
      tab: null,
      header_img: "./img/header/header01.jpg",
      tab_title_list: [
        { title: 'Top' },
        { title: 'Profile' },
        { title: 'Works' }
      ],
      my: [
        { name: 'YASSAN'},
        { icon: "./img/top_background.png"},
        { about: '1998年生まれ、広島市で育ち大のカープファン  趣味は、野球観戦や旅行、サイクリング、カメラ、ボランティア、Tシャツデザインなど  高専時代はグループでのものづくり、大学時代はボランティア活動に精を出した。 推しは「東海オンエア」と「アイドルのいる生活」'},
        { email: 'o830takumay [at] gmail.com'}
      ],
      categories: [
        {
          title: 'Education',
          list: [
            { year: '2014-2019', content: '広島商船高等専門学校 流通情報工学科 卒業' },
            { year: '2018 August(2weeks)', content: 'Emilio Aguinaldo College International Language Institute Manila, Philippines English Proficiency Program 修了' },
            { year: '2019-2021', content: '豊橋技術科学大学 工学部 情報・知能工学科 卒業' },
            { year: '2021-', content: '豊橋技術科学大学 博士前期課程 情報・知能工学専攻 在学中' }
          ]
        },
        {
          title: 'Awards',
          list: [
            { year: '2008', content: '第15回鐡道の日 こども絵画コンテスト : 優秀賞' },
            { year: '2017', content: 'EDGE INNOVATION GROOVE AWARD 「Mymelody」：最優秀賞・TDK賞 - 担当: システム設計' },
            { year: '2017', content: '全国高等専門学校プログラミングコンテスト 「メロディー☆アート」: 敢闘賞 - 担当: リーダー, ハードウェア設計・開発' },
            { year: '2017', content: 'キャンパスベンチャーグランプリ中国大会 「メロディー☆アート」：テクノロジー部門　最優秀賞（中国経済連合会会長賞）- 担当: リーダー、ビジネスアイデア立案、発表者、 発表資料作成' },
            { year: '2018', content: '第25回コンピュータフェスティバル 「卍アート」 : ブース審査 優秀賞 - 担当: アニメーション企画制作' },
            { year: '2018', content: '全国高等専門学校プログラミングコンテスト 「まきまき☆マキアートDX」：自由部門　トヨタコミュニケーションシステム企業賞 - 担当: 開発サポート,　アニメーション制作' },
            { year: '2018', content: '広島商船高等専門学校 功労賞' },
            { year: '2019', content: '第2回技科大アイデアピッチコンテスト 「ソロ活ルート共有アプリ「☆ひとで☆」」 : 優秀賞 - 担当: 企画、発表資料作成、発表者' },
            { year: '2021', content: 'アーバンデータチャレンジ2020 「食べてみりん」社会基盤情報流通推進協議会（AIGID）銅賞および、オープンガバメント推進協議会特別賞銅賞 - 担当: ソフトウェア開発' },
            { year: '2021', content: '豊橋技術科学大学 学生表彰　団体（学術研究活動）' }
          ]
        },
        {
          title: 'Internship',
          list: [
            { year: '2019(3weeks)', content: 'マツダ株式会社' },
            { year: '2020(6months)', content: '株式会社ウェブインパクト 豊橋コア' }
          ]
        },
        {
          title: 'Media',
          list: [
            { year: '2017.6.30', content: '「INNOVATION WORLD」-「TDK DREAM PITCH」, J-WAVE(81.3FM)' },
            { year: '2018.1.15', content: 'キャンパスベンチャーグランプリ中国、安森さん（広島商船高専）らに最優秀賞 | その他 ニュース | 日刊工業新聞 電子版,　https://www.nikkan.co.jp/articles/view/457826, 日刊工業新聞' },
            { year: '2018.1.16', content: 'キャンパスベンチャーグランプリ中国 認知症予防期待 知育玩具を開発, 中国新聞' },
            { year: '2018.1.24', content: 'キャンパスベンチャーグランプリ中国, 日刊工業新聞' },
            { year: '2018.1.26', content: '「キャンパスベンチャーグランプリ中国」で表彰式、最優秀賞に安森さんら | その他 ニュース | 日刊工業新聞 電子版, https://www.nikkan.co.jp/articles/view/459378, 日刊工業新聞' },
            //{ year: '2019.10.10', content: '【10月1日】 第2回技科大アイデアピッチコンテスト・2019年度第2回起業家育成セミナーを開催しました | アントレプレナーシップ教育プログラム, https://www.siva.tut.ac.jp/activity/%E3%80%9010%E6%9C%881%E6%97%A5%E3%80%91-2019%E5%B9%B4%E5%BA%A6%E7%AC%AC1%E5%9B%9E%E6%8A%80%E7%A7%91%E5%A4%A7%E3%82%A2%E3%82%A4%E3%83%87%E3%82%A2%E3%83%94%E3%83%83%E3%83%81%E3%82%B3%E3%83%B3%E3%83%86/, 豊橋技術科学大学' },
          ]
        },
        {
          title: 'Qualifying Examination',
          list: [
            { year: '2014', content: 'ニュース時事能力検定 3級' },
            { year: '2014', content: '日本語ワープロ検定 第2級' },
            { year: '2015', content: '情報処理技能検定試験 表計算 第3級' },
            { year: '2016', content: 'ITパスポート試験 合格' },
            { year: '2016', content: '漢字検定準2級' }
          ]
        },
        {
          title: 'Programming',
          list: [
            { year: '', content: 'C' },
            { year: '', content: 'C++' },
            { year: '', content: 'Java' },
            { year: '', content: 'HTML/CSS' },
            { year: '', content: 'Javascript' },
            { year: '', content: 'Typescript' },
            { year: '', content: 'Python' }
          ]
        }
      ],
      works: [
        {
          title: '電子ルーレット',
          imgpath: '01_roulette.png',
          year: '2015',
          text: 'Arduinoというマイコンを用いて開発した電子ルーレット。学校のオープンスクールの授業「流通すごろく」で使用するために開発。ボタンを押すと音が鳴りランダムで、ある数字のLEDが光るという仕組み。担当: プログラミング、箱のデザイン・設計、回路設計・開発',
          skill: []
        },
        {
          title: '私はメガネではありません',
          imgpath: '02_iamnotglasses.jpg',
          year: '2016',
          text: 'ピンクのボタンを押すと「私はメガネではありません」としゃべるデバイスを開発。担当: 企画、ハードウェア設計',
          skill: []
        },
        {
          title: 'WakeUp!World!',
          imgpath: 'noimage.png',
          year: '2016',
          text: '世界のひととつながるアラームアプリ。例えば朝7時にアラームを設定すると同じ時間に設定した世界のひとと起きることができる。担当：アラーム部の開発',
          skill: []
        },
        {
          title: 'AUTO 応答 ハイ！',
          imgpath: '04_autooutouhi.jpg',
          year: '2016',
          text: 'HACK U 大阪への参加のため4人で制作。会話の中で自分の名前や「～ですか？」という疑問を聞き取ると「はい！」と自動で返事してくるマスク。担当: 企画、ハードウェア設計',
          skill: []
        },
        {
          title: 'mymelody',
          imgpath: '05_mymelody.jpg',
          year: '2017',
          text: 'EDGE INNOVATION GROOVE AWARD 最優秀賞&TDK賞を受賞！ドアの開閉によってメロディが再生するデバイス、メロディ作成・共有サービスを考案！担当: 企画、発表資料作成、発表者、システム設計',
          skill: []
        },
        {
          title: 'メロディー☆アート',
          imgpath: '06_melodyart.png',
          year: '2017',
          text: '様々な音色のブロックをつなげて誰でも簡単に作曲ができるデバイス。全国高専プロコン敢闘賞、CVG中国最優秀賞を受賞。担当: リーダー, ハードウェア設計・開発、発表者, 発表資料作成',
          skill: []
        },
        {
          title: 'さめ☆コイ～さめくんと恋するJKライフ～',
          imgpath: '07_samekoi.png',
          year: '2017',
          text: '「さめくん」というオリジナルキャラクターが主人公の恋愛RPGゲーム。コミックマーケットに仲間と作ったゲームCDを出品した。担当: 企画、開発',
          skill: []
        },
        {
          title: '卍アート',
          imgpath: '07_samekoi.png',
          year: '2018',
          text: '普段「卍」なんて言葉を使わない作者が、ありったけの「卍」をコンセプトにした作品。第25回コンピュータフェスティバルにて、ブース審査 優秀賞を受賞！！！担当: アニメーション企画制作全般',
          skill: []
        },
        {
          title: '☆ハイタッチ☆',
          imgpath: '08_hightouch.PNG',
          year: '2018',
          text: '☆ハイタッチ☆は、世界中のハッピーを共有するハイタッチSNS。いつでもどこでも一人でもスマートフォンにハイタッチをすることで世界中にハッピーな気持ちを発信・共有！世界中の人々の「嬉しい」や「楽しい」「達成感」「称賛」のハッピーな言葉によってつながることができます。担当: 企画、システム設計・開発、プログラマー、発表資料作成、発表者',
          skill: []
        },
        {
          title: 'まきまきマキアートDX',
          imgpath: '09_makiart.jpg',
          year: '2018',
          text: '楽しくデザインまきずしを作るためのデバイス。担当: 開発サポート、Unityによるアニメーション制作',
          skill: []
        },
        {
          title: '混色電卓',
          imgpath: '10_colormixcalculator.png',
          year: '2018',
          text: '混色をテーマにしたウェブ電卓アプリ。スマホを振ると色が変化して混色した結果が表示される。担当: 企画、開発',
          skill: []
        },
        {
          title: 'リング',
          imgpath: 'imgpath: 11_ring.png',
          year: '2019',
          text: '流通情報工学科をテーマにした販売ボードゲーム。担当: リーダー、ゲーム運営',
          skill: []
        },
        {
          title: 'ジモ☆タビ',
          imgpath: '12_jimotabi.png',
          year: '2018-2019',
          text: '旅行客や地元住民による写真の投稿や旅行プランの提案や自動作成、地元住民のガイドと のマッチングによって旅行のサポートをするスマートフォンアプリ。担当: 企画、システム設計・開発、フロント・バッグエンド',
          skill: []
        },
        {
          title: '☆ひとで☆',
          imgpath: '13_hitode.png',
          year: '2019',
          text: 'ひとりのお出かけを楽しむソロ活ルート共有アプリ。技科大アイデアピッチ優秀賞。担当: ビジネスアイデア企画、発表資料作成、発表者',
          skill: []
        },
        {
          title: '広島方言Tシャツ',
          imgpath: '14_hiroshimatshirt.png',
          year: '2020',
          text: '広島県の方言である「広島弁」をモチーフにしたTシャツのデザイン・販売をしています！例えば、画像右上の「tawan たわん」は標準語で「届かない」という意味で、野球ロゴ風にデザインしました。担当: 企画、デザイン',
          skill: []
        },
        {
          title: '店内混雑度推定システム',
          imgpath: '15_In_store_congestion_estimation_system.png',
          year: '2020-2021',
          text: '大学の学部の卒業研究のため開発。Wi-Fiパケットを利用した混雑度推定システムを開発・実装して、実際の飲食店にて実際に2回実験を行った。システム設計・開発、実験、データ分析',
          skill: []
        },
        {
          title: '私はロボットではありません',
          imgpath: '16_iamnotrobot.png',
          year: '2021',
          text: 'ロボット認証をもとにしたクイズゲームアプリ。画面に表示される9つの画像からテーマにあった画像をタップして正解を見つけるゲーム。担当: クイズの作問、画像データ収集',
          skill: []
        },
        {
          title: '表浜BLUE WALK 2020-2021',
          imgpath: '17_bluewalk2021_day1.png',
          year: '2021',
          text: '2021年8月に愛知県豊橋・田原の表浜海岸にて5日間開催された「表浜BLUE WALK 2020-2021」のロゴ制作と1日目のリーダーを担当。ロゴ制作は、海とBLUEWALKの「青」、表浜海岸の「人」「生物」「伊良湖岬の灯台」「カメ」、環境の「理沙育マーク」をもとにデザインした。1日目のリーダーでは、シフト・スケジュール、当日の指揮、ワークショップの企画・運営を行った。ワークショップでは、「環境・ゴミ○×クイズ」、Reduce、Reuse、Recycle、Refuse、Repairの5Rに続く「6R目を考えよう」を行った。「来年も参加したい！」という参加者の声があり嬉しかった。担当: イベント企画・運営、ロゴ制作',
          skill: []
        }
      ]
    }
  })


}) ();