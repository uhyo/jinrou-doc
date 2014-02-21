// Generated by CoffeeScript 1.7.1
(function() {
  exports.jobs = {
    Human: {
      name: "村人",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: null,
      wolfTolerance: false,
      vampireTolerance: false,
      wolfGuard: false,
      vampireGuard: false
    },
    Werewolf: {
      name: "人狼",
      team: "人狼陣営",
      type: "人狼系",
      fortune: "人狼",
      psychic: "人狼",
      judge: "狼",
      select: "強制",
      wolfTolerance: true
    },
    Diviner: {
      name: "占い師",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "強制"
    },
    Psychic: {
      name: "霊能者",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    Madman: {
      name: "狂人",
      team: "人狼陣営",
      type: "狂人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    Guard: {
      name: "狩人",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "強制",
      wolfGuard: true,
      vampireGuard: true
    },
    Couple: {
      name: "共有者",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    Fox: {
      name: "妖狐",
      team: "妖狐陣営",
      type: "妖狐系",
      fortune: "村人",
      psychic: "村人",
      judge: "狐",
      wolfTolerance: true
    },
    Poisoner: {
      name: "埋毒者",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    BigWolf: {
      name: "大狼",
      team: "人狼陣営",
      type: "人狼系",
      fortune: "村人",
      psychic: "大狼",
      judge: "狼"
    },
    TinyFox: {
      name: "子狐",
      team: "妖狐陣営",
      type: "妖狐系",
      fortune: "村人",
      psychic: "子狐",
      judge: "狐",
      select: "強制"
    },
    Bat: {
      name: "こうもり",
      team: "その他",
      type: "第三陣営系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    Noble: {
      name: "貴族",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    Slave: {
      name: "奴隷",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    Magician: {
      name: "魔術師",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "強制"
    },
    Spy: {
      name: "スパイ",
      team: "人狼陣営",
      type: "狂人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "任意"
    },
    WolfDiviner: {
      name: "人狼占い",
      team: "人狼陣営",
      type: "人狼系",
      fortune: "人狼",
      psychic: "人狼",
      judge: "狼",
      select: "強制"
    },
    Fugitive: {
      name: "逃亡者",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "強制",
      wolfTolerance: true,
      vampireTolerance: true
    },
    Merchant: {
      name: "商人",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "任意"
    },
    QueenSpectator: {
      name: "女王観戦者",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    MadWolf: {
      name: "狂人狼",
      team: "村人陣営",
      type: "人狼系",
      fortune: "人狼",
      psychic: "人狼",
      judge: "狼"
    },
    Neet: {
      name: "ニート",
      team: "ニート",
      type: "なし",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    Liar: {
      name: "嘘つき",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "強制"
    },
    Spy2: {
      name: "スパイⅡ",
      team: "人狼陣営",
      type: "狂人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    Copier: {
      name: "コピー",
      team: "その他",
      type: "役職変化系",
      fortune: "村人",
      psychic: "村人",
      judge: "なし",
      select: "任意"
    },
    Light: {
      name: "デスノート",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "任意"
    },
    Fanatic: {
      name: "狂信者",
      team: "人狼陣営",
      type: "狂人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    Immoral: {
      name: "背徳者",
      team: "妖狐陣営",
      type: "なし",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    Devil: {
      name: "悪魔くん",
      team: "悪魔くん陣営",
      type: "第三陣営系",
      fortune: "村人",
      psychic: "人狼",
      judge: "人",
      wolfTolerance: true
    },
    ToughGuy: {
      name: "タフガイ",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    Cupid: {
      name: "キューピッド",
      team: "恋人陣営",
      type: "第三陣営系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "強制"
    },
    Stalker: {
      name: "ストーカー",
      team: "その他",
      type: "役職変化系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "強制"
    },
    Cursed: {
      name: "呪われた者",
      team: "村人陣営",
      type: "役職変化系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      wolfTolerance: true,
      vampireTolerance: true
    },
    ApprenticeSeer: {
      name: "見習い占い師",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    Diseased: {
      name: "病人",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    Spellcaster: {
      name: "呪いをかける者",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "任意"
    },
    Lycan: {
      name: "狼憑き",
      team: "村人陣営",
      type: "村人系",
      fortune: "人狼",
      psychic: "村人",
      judge: "人"
    },
    Priest: {
      name: "聖職者",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      wolfGuard: true,
      vampireGuard: true,
      select: "任意"
    },
    Prince: {
      name: "プリンス",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    PI: {
      name: "超常現象研究者",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "任意"
    },
    Sorcerer: {
      name: "妖術師",
      team: "人狼陣営",
      type: "狂人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "強制"
    },
    Doppleganger: {
      name: "ドッペルゲンガー",
      team: "その他",
      type: "役職変化系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "任意"
    },
    CultLeader: {
      name: "カルトリーダー",
      team: "その他",
      type: "第三陣営系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "強制"
    },
    Vampire: {
      name: "ヴァンパイア",
      team: "ヴァンパイア陣営",
      type: "第三陣営系",
      fortune: "ヴァンパイア",
      psychic: "村人",
      judge: "ヴァンパイア",
      select: "強制",
      wolfTolerance: true
    },
    LoneWolf: {
      name: "一匹狼",
      team: "人狼陣営",
      type: "人狼系",
      fortune: "人狼",
      psychic: "人狼",
      judge: "狼",
      select: "強制"
    },
    Cat: {
      name: "猫又",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "任意"
    },
    Witch: {
      name: "魔女",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "任意"
    },
    Oldman: {
      name: "老人",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    Tanner: {
      name: "皮なめし職人",
      team: "その他",
      type: "第三陣営系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    OccultMania: {
      name: "オカルトマニア",
      team: "その他",
      type: "役職変化系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "強制"
    },
    WolfCub: {
      name: "狼の子",
      team: "人狼陣営",
      type: "人狼系",
      fortune: "人狼",
      psychic: "人狼",
      judge: "狼",
      select: "強制"
    },
    WhisperingMad: {
      name: "囁き狂人",
      team: "人狼陣営",
      type: "狂人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    Lover: {
      name: "求愛者",
      team: "恋人陣営",
      type: "第三陣営系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    Thief: {
      name: "盗人",
      team: "村人陣営",
      type: "役職変化系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    Dog: {
      name: "犬",
      team: "村人陣営",
      type: "村人系",
      fortune: "人狼",
      psychic: "村人",
      judge: "人",
      select: "強制",
      wolfGuard: true,
      vampireGuard: true
    },
    Dictator: {
      name: "独裁者",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    SeersMama: {
      name: "予言者のママ",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    Trapper: {
      name: "罠師",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "強制",
      wolfGuard: true,
      vampireGuard: true
    },
    WolfBoy: {
      name: "狼少年",
      team: "人狼陣営",
      type: "狂人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "任意"
    },
    Hoodlum: {
      name: "ならず者",
      team: "その他",
      type: "第三陣営系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "強制"
    },
    QuantumPlayer: {
      name: "量子人間",
      team: "その他",
      type: "第三陣営系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "強制"
    },
    RedHood: {
      name: "赤ずきん",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    Counselor: {
      name: "カウンセラー",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "任意"
    },
    Miko: {
      name: "巫女",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "任意"
    },
    GreedyWolf: {
      name: "欲張りな狼",
      team: "人狼陣営",
      type: "人狼系",
      fortune: "人狼",
      psychic: "人狼",
      judge: "狼",
      select: "強制"
    },
    FascinatingWolf: {
      name: "誘惑する女狼",
      team: "人狼陣営",
      type: "人狼系",
      fortune: "人狼",
      psychic: "人狼",
      judge: "狼",
      select: "強制"
    },
    SolitudeWolf: {
      name: "孤独な狼",
      team: "人狼陣営",
      type: "人狼系",
      fortune: "人狼",
      psychic: "人狼",
      judge: "狼",
      select: "強制"
    },
    ToughWolf: {
      name: "一途な狼",
      team: "人狼陣営",
      type: "人狼系",
      fortune: "人狼",
      psychic: "人狼",
      judge: "狼",
      select: "強制"
    },
    ThreateningWolf: {
      name: "威嚇する狼",
      team: "人狼陣営",
      type: "人狼系",
      fortune: "人狼",
      psychic: "人狼",
      judge: "狼",
      select: "強制"
    },
    HolyMarked: {
      name: "聖痕者",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    WanderingGuard: {
      name: "風来狩人",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      wolfGuard: true,
      vampireGuard: true,
      select: "強制"
    },
    ObstructiveMad: {
      name: "邪魔狂人",
      team: "人狼陣営",
      type: "狂人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "強制"
    },
    TroubleMaker: {
      name: "トラブルメーカー",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "任意"
    },
    FrankensteinsMonster: {
      name: "フランケンシュタインの怪物",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    BloodyMary: {
      name: "血まみれのメアリー",
      team: "村人陣営",
      type: "役職変化系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "任意"
    },
    King: {
      name: "王様",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    PsychoKiller: {
      name: "サイコキラー",
      team: "人狼陣営",
      type: "狂人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人"
    },
    SantaClaus: {
      name: "サンタクロース",
      team: "村人陣営",
      type: "村人系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "強制"
    },
    Phantom: {
      name: "怪盗",
      team: "村人陣営",
      type: "役職変化系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "強制"
    },
    BadLady: {
      name: "悪女",
      team: "恋人陣営",
      type: "第三陣営系",
      fortune: "村人",
      psychic: "村人",
      judge: "人",
      select: "強制"
    }
  };

  exports.teams = {
    Human: "村人陣営",
    Werewolf: "人狼陣営",
    Fox: "妖狐陣営",
    Vampire: "ヴァンパイア陣営",
    Devil: "悪魔くん陣営",
    Friend: "恋人陣営",
    Others: "その他"
  };

  exports.categories = {
    Human: "村人系",
    Madman: "狂人系",
    Werewolf: "人狼系",
    Fox: "妖狐系",
    Switching: "役職変化系",
    Others: "第三陣営系"
  };

  exports.subs = {
    Friend: {
      name: "恋人",
      disp: "恋人（役職名）",
      real: "恋人（役職名）"
    },
    CultMember: {
      name: "カルト信者",
      disp: "カルト信者（役職名）",
      real: "カルト信者（役職名）"
    },
    WolfMinion: {
      name: "狼の子分",
      disp: "狼の子分（役職名）",
      real: "狼の子分（役職名）"
    },
    Drunk: {
      name: "酔っ払い",
      disp: "村人",
      real: "酔っ払い（役職名）"
    },
    Decider: {
      name: "決定者",
      disp: "役職名",
      real: "決定者（役職名）"
    },
    Authority: {
      name: "権力者",
      disp: "役職名",
      real: "権力者（役職名）"
    },
    Counseled: {
      name: "更生者",
      disp: "更生者（役職名）",
      real: "校正者（役職名）"
    },
    KeepedLover: {
      name: "手玉",
      disp: "恋人（役職者）",
      real: "手玉（役職者）"
    }
  };

}).call(this);
