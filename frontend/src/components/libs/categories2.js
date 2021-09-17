function normalize (str) {
  return str.toLowerCase().trim().replace(/[.,\/#!$%\^&\*;:{}=\-_`"'~()\s]/g, '-').trim()
}

class Categories {
  constructor () {
    this.categories = {
      // required: slug, cls, i18n
      // include root if category is top level
      // include [types] if category is restricted to certain import types
      // include [games] if category is restricted to certain games/expansions
      'cl6': {slug: 'classes/death-knight', image: 'deathknight.png', color: '#C41F3B', i18n: 'warcraft:classes.6', domain: 0, games: ['legion', 'bfa', 'sl']},
      'cl6-1': {slug: 'classes/death-knight/blood', i18n: 'warcraft:classes.6-1', domain: 0, parent: 'cl6', games: ['legion', 'bfa', 'sl']},
      'cl6-2': {slug: 'classes/death-knight/frost', i18n: 'warcraft:classes.6-2', domain: 0, parent: 'cl6', games: ['legion', 'bfa', 'sl']},
      'cl6-3': {slug: 'classes/death-knight/unholy', i18n: 'warcraft:classes.6-3', domain: 0, parent: 'cl6', games: ['legion', 'bfa', 'sl']},

      'cl12': {slug: 'classes/demon-hunter', image: 'demonhunter.png', color: '#A330C9', i18n: 'warcraft:classes.12', domain: 0, games: ['legion', 'bfa', 'sl']},
      'cl12-1': {slug: 'classes/demon-hunter/havoc', cls:'cl-demonhunter', i18n: 'warcraft:classes.12-1', domain: 0, parent: 'cl12', games: ['legion', 'bfa', 'sl']},
      'cl12-2': {slug: 'classes/demon-hunter/vengeance', i18n: 'warcraft:classes.12-2', domain: 0, parent: 'cl12', games: ['legion', 'bfa', 'sl']},

      'cl11': {slug: 'classes/druid', image: 'druid.png', color: '#FF7D0A', i18n: 'warcraft:classes.11', domain: 0},
      'cl11-1': {slug: 'classes/druid/balance', i18n: 'warcraft:classes.11-1', domain: 0, parent: 'cl11'},
      'cl11-2': {slug: 'classes/druid/feral', i18n: 'warcraft:classes.11-2', domain: 0, parent: 'cl11'},
      'cl11-3': {slug: 'classes/druid/guardian', i18n: 'warcraft:classes.11-3', domain: 0, parent: 'cl11', games: ['legion', 'bfa', 'sl']},
      'cl11-4': {slug: 'classes/druid/restoration', i18n: 'warcraft:classes.11-4', domain: 0, parent: 'cl11'},

      'cl3': {slug: 'classes/hunter', image: 'hunter.png', color: '#ABD473', i18n: 'warcraft:classes.3', domain: 0},
      'cl3-1': {slug: 'classes/hunter/beast-mastery', i18n: 'warcraft:classes.3-1', domain: 0, parent: 'cl3'},
      'cl3-2': {slug: 'classes/hunter/marksmanship', i18n: 'warcraft:classes.3-2', domain: 0, parent: 'cl3'},
      'cl3-3': {slug: 'classes/hunter/survival', i18n: 'warcraft:classes.3-3', domain: 0, parent: 'cl3'},

      'cl8': {slug: 'classes/mage', image: 'mage.png', color: '#69CCF0', i18n: 'warcraft:classes.8', domain: 0},
      'cl8-1': {slug: 'classes/mage/arcane', i18n: 'warcraft:classes.8-1', domain: 0, parent: 'cl8'},
      'cl8-2': {slug: 'classes/mage/fire', i18n: 'warcraft:classes.8-2', domain: 0, parent: 'cl8'},
      'cl8-3': {slug: 'classes/mage/frost', i18n: 'warcraft:classes.8-3', domain: 0, parent: 'cl8'},

      'cl10': {slug: 'classes/monk', image: 'monk.png', color: '#00FF96', i18n: 'warcraft:classes.10', domain: 0, games: ['legion', 'bfa', 'sl']},
      'cl10-1': {slug: 'classes/monk/brewmaster', i18n: 'warcraft:classes.10-1', domain: 0, parent: 'cl10', games: ['legion', 'bfa', 'sl']},
      'cl10-2': {slug: 'classes/monk/mistweaver', i18n: 'warcraft:classes.10-2', domain: 0, parent: 'cl10', games: ['legion', 'bfa', 'sl']},
      'cl10-3': {slug: 'classes/monk/windwalker', i18n: 'warcraft:classes.10-3', domain: 0, parent: 'cl10', games: ['legion', 'bfa', 'sl']},

      'cl2': {slug: 'classes/paladin', image: 'paladin.png', color: '#F58CBA', i18n: 'warcraft:classes.2', domain: 0},
      'cl2-1': {slug: 'classes/paladin/holy', i18n: 'warcraft:classes.2-1', domain: 0, parent: 'cl2'},
      'cl2-2': {slug: 'classes/paladin/protection', i18n: 'warcraft:classes.2-2', domain: 0, parent: 'cl2'},
      'cl2-3': {slug: 'classes/paladin/retribution', i18n: 'warcraft:classes.2-3', domain: 0, parent: 'cl2'},

      'cl5': {slug: 'classes/priest', image: 'priest.png', color: '#FFFFFF', lightColor: '#A9A9A9', i18n: 'warcraft:classes.5', domain: 0},
      'cl5-1': {slug: 'classes/priest/discipline', i18n: 'warcraft:classes.5-1', domain: 0, parent: 'cl5'},
      'cl5-2': {slug: 'classes/priest/holy', i18n: 'warcraft:classes.5-2', domain: 0, parent: 'cl5'},
      'cl5-3': {slug: 'classes/priest/shadow', i18n: 'warcraft:classes.5-3', domain: 0, parent: 'cl5'},

      'cl4': {slug: 'classes/rogue', image: 'rogue.png', color: '#FFF569', lightColor: '#E8D901', i18n: 'warcraft:classes.4', domain: 0},
      'cl4-1': {slug: 'classes/rogue/assassination', i18n: 'warcraft:classes.4-1', domain: 0, parent: 'cl4'},
      'cl4-2': {slug: 'classes/rogue/outlaw', i18n: 'warcraft:classes.4-2', domain: 0, parent: 'cl4', games: ['legion', 'bfa', 'sl']},
      'cl4-2c': {slug: 'classes/rogue/combat', i18n: 'warcraft:classes.4-2c', domain: 0, parent: 'cl4', games: ['classic', 'tbc']},
      'cl4-3': {slug: 'classes/rogue/subtlety', i18n: 'warcraft:classes.4-3', domain: 0, parent: 'cl4'},

      'cl7': {slug: 'classes/shaman', image: 'shaman.png', color: '#0070DE', i18n: 'warcraft:classes.7', domain: 0},
      'cl7-1': {slug: 'classes/shaman/elemental', i18n: 'warcraft:classes.7-1', domain: 0, parent: 'cl7'},
      'cl7-2': {slug: 'classes/shaman/enhancement', i18n: 'warcraft:classes.7-2', domain: 0, parent: 'cl7'},
      'cl7-3': {slug: 'classes/shaman/restoration', i18n: 'warcraft:classes.7-3', domain: 0, parent: 'cl7'},

      'cl9': {slug: 'classes/warlock', image: 'warlock.png', color: '#9482C9', i18n: 'warcraft:classes.9', domain: 0},
      'cl9-1': {slug: 'classes/warlock/affliction', i18n: 'warcraft:classes.9-1', domain: 0, parent: 'cl9'},
      'cl9-2': {slug: 'classes/warlock/demonology', i18n: 'warcraft:classes.9-2', domain: 0, parent: 'cl9'},
      'cl9-3': {slug: 'classes/warlock/destruction', i18n: 'warcraft:classes.9-3', domain: 0, parent: 'cl9'},

      'cl1': {slug: 'classes/warrior', image: 'warrior.png', color: '#C79C6E', i18n: 'warcraft:classes.1', domain: 0},
      'cl1-1': {slug: 'classes/warrior/arms', i18n: 'warcraft:classes.1-1', domain: 0, parent: 'cl1'},
      'cl1-2': {slug: 'classes/warrior/fury', i18n: 'warcraft:classes.1-2', domain: 0, parent: 'cl1'},
      'cl1-3': {slug: 'classes/warrior/protection', i18n: 'warcraft:classes.1-3', domain: 0, parent: 'cl1'},

      'gen0': {slug: 'general', image:'miscellaneous', color: '#D0B58B', i18n: 'General', domain: 0, types: ['WEAKAURA', 'COLLECTION']},
      'gen7': {slug: 'general/achievements', i18n: 'Achievements', domain: 0, parent: 'gen0', types: ['WEAKAURA', 'COLLECTION'], games: ['legion', 'bfa', 'sl']},
      'gen2': {slug: 'general/questing', i18n: 'Questing', domain: 0, parent: 'gen0', types: ['WEAKAURA', 'COLLECTION']},
      'gen6': {slug: 'general/non-combat', i18n: 'Non-Combat', domain: 0, parent: 'gen0', types: ['WEAKAURA', 'COLLECTION']},
      'gen9': {slug: 'general/currency', i18n: 'Currency', domain: 0, parent: 'gen0', types: ['WEAKAURA', 'COLLECTION'], games: ['legion', 'bfa', 'sl']},
      'gen10': {slug: 'general/reputation', i18n: 'Reputation', domain: 0, parent: 'gen0', types: ['WEAKAURA', 'COLLECTION'], },
      'gen11': {slug: 'general/collectibles', i18n: 'Collectibles', domain: 0, parent: 'gen0', types: ['WEAKAURA', 'COLLECTION'], games: ['legion', 'bfa', 'sl']},
      'gen12': {slug: 'general/world-events', i18n: 'World Events', domain: 0, parent: 'gen0', types: ['WEAKAURA', 'COLLECTION'], games: ['legion', 'bfa', 'sl']},
      'gen13': {slug: 'general/world-events/darkmoon-faire', i18n: 'Darkmoon Faire', domain: 0, parent: 'gen0', types: ['WEAKAURA', 'COLLECTION'], games: ['legion', 'bfa', 'sl']},
      'gen14': {slug: 'general/world-events/brawlers-guild', i18n: 'Brawler\', domain: 0s Guild', parent: 'gen0', types: ['WEAKAURA', 'COLLECTION'], games: ['legion', 'bfa', 'sl']},
      'gen15': {slug: 'general/pet-battles', i18n: 'Pet Battles', domain: 0, parent: 'gen0', types: ['WEAKAURA', 'COLLECTION'], games: ['legion', 'bfa', 'sl']},
      'gen16': {slug: 'general/warfronts', i18n: 'Warfronts', domain: 0, parent: 'gen0', types: ['WEAKAURA', 'COLLECTION'], games: ['bfa']},
      'gen17': {slug: 'general/island-expeditions', i18n: 'Island Expeditions', domain: 0, parent: 'gen0', types: ['WEAKAURA', 'COLLECTION'], games: ['bfa']},
      'gen18': {slug: 'general/covenants', i18n: 'Covenants', domain: 0, parent: 'gen0', types: ['WEAKAURA', 'COLLECTION'], games: ['sl']},

      'equip': {slug: 'equipment', image: 'equipment.png', color: '#7ED321', i18n: 'Equipment', domain: 0, types: ['WEAKAURA', 'COLLECTION']},
      'legen': {slug: 'equipment/legendaries', i18n: 'Legendaries', domain: 0, parent: 'equip', types: ['WEAKAURA', 'COLLECTION'], games: ['legion', 'bfa', 'sl']},
      'equip1': {slug: 'equipment/trinkets', i18n: 'Trinkets', domain: 0, parent: 'equip', types: ['WEAKAURA', 'COLLECTION']},
      'equip2': {slug: 'equipment/item-enhancements', i18n: 'Item Enhancements', domain: 0, parent: 'equip', types: ['WEAKAURA', 'COLLECTION']},

      'mech': {slug: 'combat-mechanics', image: 'mechanics.png', color: '#F55F37', i18n: 'Combat Mechanics', domain: 0, types: ['WEAKAURA', 'COLLECTION']},
      'mech1': {slug: 'combat-mechanics/battle-resurrection', i18n: 'Battle Resurrection', domain: 0, parent: 'mech', types: ['WEAKAURA'], games: ['legion', 'bfa', 'sl']},
      'mech2': {slug: 'combat-mechanics/interrupts', i18n: 'Interrupts', domain: 0, parent: 'mech', types: ['WEAKAURA']},
      'mech3': {slug: 'combat-mechanics/theorycrafting', i18n: 'Theorycrafting', domain: 0, parent: 'mech', types: ['WEAKAURA', 'COLLECTION']},
      'mech4': {slug: 'combat-mechanics/vehicles', i18n: 'Vehicles', domain: 0, parent: 'mech', types: ['WEAKAURA'], games: ['legion', 'bfa', 'sl']},
      'mech5': {slug: 'combat-mechanics/consumables', i18n: 'Consumables', domain: 0, parent: 'mech', types: ['WEAKAURA', 'COLLECTION']},
      'mech6': {slug: 'combat-mechanics/group-buffs', i18n: 'Group Buffs', domain: 0, parent: 'mech', types: ['WEAKAURA', 'COLLECTION']},

      'role0': {slug: 'class-roles', image: 'roles.png', color: '#BED0C1', i18n: 'Group Roles', domain: 0},
      'role4': {slug: 'class-roles/raid-leading', i18n: 'Raid Leading', domain: 0, parent: 'role0'},
      'role1': {slug: 'class-roles/damage-dealing', i18n: 'Damage Dealing', domain: 0, parent: 'role0'},
      'role2': {slug: 'class-roles/healing', i18n: 'Healing', domain: 0, parent: 'role0'},
      'role3': {slug: 'class-roles/tanking', i18n: 'Tanking', domain: 0, parent: 'role0'},

      // shadowlands
      'raidsantumdom': {slug: 'pve/sanctum-of-domination', image: 'sanctumofdom.png', color: '#5CE000', i18n: 'warcraft:zones.SanctumOfDomination', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['sl']},
      'raidsantumdom1': {slug: 'pve/sanctum-of-domination/tarragrue', i18n: 'warcraft:bosses.Tarragrue', domain: 0, parent: 'raidsantumdom', types: ['WEAKAURA'], games: ['sl']},
      'raidsantumdom2': {slug: 'pve/sanctum-of-domination/eye-of-the-jailer', i18n: 'warcraft:bosses.EyeoftheJailer', domain: 0, parent: 'raidsantumdom', types: ['WEAKAURA'], games: ['sl']},
      'raidsantumdom3': {slug: 'pve/sanctum-of-domination/the-nine', i18n: 'warcraft:bosses.TheNine', domain: 0, parent: 'raidsantumdom', types: ['WEAKAURA'], games: ['sl']},
      'raidsantumdom4': {slug: 'pve/sanctum-of-domination/remnant-of-nerzhul', i18n: 'warcraft:bosses.RemnantofNerzhul', domain: 0, parent: 'raidsantumdom', types: ['WEAKAURA'], games: ['sl']},
      'raidsantumdom5': {slug: 'pve/sanctum-of-domination/soulrender-dormazain', i18n: 'warcraft:bosses.SoulrenderDormazain', domain: 0, parent: 'raidsantumdom', types: ['WEAKAURA'], games: ['sl']},
      'raidsantumdom6': {slug: 'pve/sanctum-of-domination/painsmith-raznal', i18n: 'warcraft:bosses.PainsmithRaznal', domain: 0, parent: 'raidsantumdom', types: ['WEAKAURA'], games: ['sl']},
      'raidsantumdom7': {slug: 'pve/sanctum-of-domination/guardian-of-the-first-ones', i18n: 'warcraft:bosses.GuardianoftheFirstOnes', domain: 0, parent: 'raidsantumdom', types: ['WEAKAURA'], games: ['sl']},
      'raidsantumdom8': {slug: 'pve/sanctum-of-domination/fatescribe-roh-kalo', i18n: 'warcraft:bosses.FatescribeRohKalo', domain: 0, parent: 'raidsantumdom', types: ['WEAKAURA'], games: ['sl']},
      'raidsantumdom9': {slug: 'pve/sanctum-of-domination/kelthuzad', i18n: 'warcraft:bosses.Kelthuzad', domain: 0, parent: 'raidsantumdom', types: ['WEAKAURA'], games: ['sl']},
      'raidsantumdom10': {slug: 'pve/sanctum-of-domination/sylvnas-windrunner', i18n: 'warcraft:bosses.SylvanasWindrunner', domain: 0, parent: 'raidsantumdom', types: ['WEAKAURA'], games: ['sl']},

      'raidnathria': {slug: 'pve/nathria', image: 'nathria.png', color: '#9693BD', i18n: 'warcraft:zones.CastleNathria', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['sl']},
      'raidnathria1': {slug: 'pve/nathria/shriekwing', i18n: 'warcraft:bosses.Shriekwing', domain: 0, parent: 'raidnathria', types: ['WEAKAURA'], games: ['sl']},
      'raidnathria10': {slug: 'pve/nathria/altimor-the-huntsman', i18n: 'warcraft:bosses.Altimor', domain: 0, parent: 'raidnathria', types: ['WEAKAURA'], games: ['sl']},
      'raidnathria2': {slug: 'pve/nathria/hungering-destroyer', i18n: 'warcraft:bosses.HungeringDestroyer', domain: 0, parent: 'raidnathria', types: ['WEAKAURA'], games: ['sl']},
      'raidnathria4': {slug: 'pve/nathria/artificer-xymox', i18n: 'warcraft:bosses.ArtificerXyMox', domain: 0, parent: 'raidnathria', types: ['WEAKAURA'], games: ['sl']},
      'raidnathria3': {slug: 'pve/nathria/kaelthas-sunstrider', i18n: 'warcraft:bosses.SunKingsSalvation', domain: 0, parent: 'raidnathria', types: ['WEAKAURA'], games: ['sl']},
      'raidnathria5': {slug: 'pve/nathria/lady-inerva-darkvein', i18n: 'warcraft:bosses.LadyInervaDarkvein', domain: 0, parent: 'raidnathria', types: ['WEAKAURA'], games: ['sl']},
      'raidnathria6': {slug: 'pve/nathria/the-council-of-blood', i18n: 'warcraft:bosses.TheCouncilOfBlood', domain: 0, parent: 'raidnathria', types: ['WEAKAURA'], games: ['sl']},
      'raidnathria7': {slug: 'pve/nathria/sludgefist', i18n: 'warcraft:bosses.Sludgefist', domain: 0, parent: 'raidnathria', types: ['WEAKAURA'], games: ['sl']},
      'raidnathria8': {slug: 'pve/nathria/stone-legion-generals', i18n: 'warcraft:bosses.StoneLegionGenerals', domain: 0, parent: 'raidnathria', types: ['WEAKAURA'], games: ['sl']},
      'raidnathria9': {slug: 'pve/nathria/sire-denathrius', i18n: 'warcraft:bosses.SireDenathrius', domain: 0, parent: 'raidnathria', types: ['WEAKAURA'], games: ['sl']},

      'sldungeon': {slug: 'pve/shadowlands-dungeons', image: 'dungeon.png', color: '#F5A623', i18n: 'Shadowlands Dungeons', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['sl']},
      'sldungeon1': {slug: 'pve/shadowlands-dungeons/the-necrotic-wake', i18n: 'warcraft:zones.TheNecroticWake', domain: 0, parent: 'sldungeon', types: ['WEAKAURA'], games: ['sl']},
      'sldungeon2': {slug: 'pve/shadowlands-dungeons/plaguefall', i18n: 'warcraft:zones.Plaguefall', domain: 0, parent: 'sldungeon', types: ['WEAKAURA'], games: ['sl']},
      'sldungeon3': {slug: 'pve/shadowlands-dungeons/mists-of-tirna-scithe', i18n: 'warcraft:zones.MistsOfTirnaScithe', domain: 0, parent: 'sldungeon', types: ['WEAKAURA'], games: ['sl']},
      'sldungeon4': {slug: 'pve/shadowlands-dungeons/halls-of-attonement', i18n: 'warcraft:zones.HallsOfAttonement', domain: 0, parent: 'sldungeon', types: ['WEAKAURA'], games: ['sl']},
      'sldungeon5': {slug: 'pve/shadowlands-dungeons/theater-of-pain', i18n: 'warcraft:zones.TheaterOfPain', domain: 0, parent: 'sldungeon', types: ['WEAKAURA'], games: ['sl']},
      'sldungeon6': {slug: 'pve/shadowlands-dungeons/de-other-side', i18n: 'warcraft:zones.DeOtherSide', domain: 0, parent: 'sldungeon', types: ['WEAKAURA'], games: ['sl']},
      'sldungeon7': {slug: 'pve/shadowlands-dungeons/spires-of-ascension', i18n: 'warcraft:zones.SpiresOfAscension', domain: 0, parent: 'sldungeon', types: ['WEAKAURA'], games: ['sl']},
      'sldungeon8': {slug: 'pve/shadowlands-dungeons/sanguine-depths', i18n: 'warcraft:zones.SanguineDepths', domain: 0, parent: 'sldungeon', types: ['WEAKAURA'], games: ['sl']},
      'sldungeon9': {slug: 'pve/shadowlands-dungeons/tazavesh-the-veiled-market', i18n: 'warcraft:zones.Tazavesh', domain: 0, parent: 'sldungeon', types: ['WEAKAURA'], games: ['sl']},

      // bfa
      'raidnyalotha': {slug: 'pve/nyalotha', image: 'nyalotha.png', color: '#5EE1A6', i18n: 'warcraft:zones.nyalotha', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['bfa']},
      'raidnyalotha1': {slug: 'pve/nyalotha/wrathion-the-black-emperor', i18n: 'warcraft:bosses.nya1', domain: 0, parent: 'raidnyalotha', types: ['WEAKAURA'], games: ['bfa']},
      'raidnyalotha2': {slug: 'pve/nyalotha/maut', i18n: 'warcraft:bosses.nya2', domain: 0, parent: 'raidnyalotha', types: ['WEAKAURA'], games: ['bfa']},
      'raidnyalotha3': {slug: 'pve/nyalotha/the-prophet-skitra', i18n: 'warcraft:bosses.nya3', domain: 0, parent: 'raidnyalotha', types: ['WEAKAURA'], games: ['bfa']},
      'raidnyalotha4': {slug: 'pve/nyalotha/dark-inquisitor-xanesh', i18n: 'warcraft:bosses.nya4', domain: 0, parent: 'raidnyalotha', types: ['WEAKAURA'], games: ['bfa']},
      'raidnyalotha5': {slug: 'pve/nyalotha/hivemind', i18n: 'warcraft:bosses.nya5', domain: 0, parent: 'raidnyalotha', types: ['WEAKAURA'], games: ['bfa']},
      'raidnyalotha6': {slug: 'pve/nyalotha/shadhar-the-insatiable', i18n: 'warcraft:bosses.nya6', domain: 0, parent: 'raidnyalotha', types: ['WEAKAURA'], games: ['bfa']},
      'raidnyalotha7': {slug: 'pve/nyalotha/drestagath', i18n: 'warcraft:bosses.nya7', domain: 0, parent: 'raidnyalotha', types: ['WEAKAURA'], games: ['bfa']},
      'raidnyalotha8': {slug: 'pve/nyalotha/vexiona', i18n: 'warcraft:bosses.nya8', domain: 0, parent: 'raidnyalotha', types: ['WEAKAURA'], games: ['bfa']},
      'raidnyalotha9': {slug: 'pve/nyalotha/ra-den-the-despoiled', i18n: 'warcraft:bosses.nya9', domain: 0, parent: 'raidnyalotha', types: ['WEAKAURA'], games: ['bfa']},
      'raidnyalotha10': {slug: 'pve/nyalotha/ilgynoth-corruption-reborn', i18n: 'warcraft:bosses.nya10', domain: 0, parent: 'raidnyalotha', types: ['WEAKAURA'], games: ['bfa']},
      'raidnyalotha11': {slug: 'pve/nyalotha/carapace-of-nzoth', i18n: 'warcraft:bosses.nya11', domain: 0, parent: 'raidnyalotha', types: ['WEAKAURA'], games: ['bfa']},
      'raidnyalotha12': {slug: 'pve/nyalotha/nzoth-the-corruptor', i18n: 'warcraft:bosses.nya12', domain: 0, parent: 'raidnyalotha', types: ['WEAKAURA'], games: ['bfa']},

      'raideternalpalace': {slug: 'pve/the-eternal-palace', image: 'eternalpalace.png', color: '#FF98EC', i18n: 'warcraft:zones.10425', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['bfa']},
      'raideternalpalace1': {slug: 'pve/the-eternal-palace/abyssal-commander-sivara', i18n: 'warcraft:bosses.151881', domain: 0, parent: 'raideternalpalace', types: ['WEAKAURA'], games: ['bfa']},
      'raideternalpalace2': {slug: 'pve/the-eternal-palace/rage-of-azshara', i18n: 'warcraft:bosses.152364', domain: 0, parent: 'raideternalpalace', types: ['WEAKAURA'], games: ['bfa']},
      'raideternalpalace3': {slug: 'pve/the-eternal-palace/underwater-monstrosity', i18n: 'warcraft:bosses.150653', domain: 0, parent: 'raideternalpalace', types: ['WEAKAURA'], games: ['bfa']},
      'raideternalpalace4': {slug: 'pve/the-eternal-palace/lady-priscilla-ashvane', i18n: 'warcraft:bosses.153142', domain: 0, parent: 'raideternalpalace', types: ['WEAKAURA'], games: ['bfa']},
      'raideternalpalace5': {slug: 'pve/the-eternal-palace/the-hatchery', i18n: 'warcraft:bosses.152128', domain: 0, parent: 'raideternalpalace', types: ['WEAKAURA'], games: ['bfa']},
      'raideternalpalace6': {slug: 'pve/the-eternal-palace/the-queens-court', i18n: 'warcraft:bosses.152853', domain: 0, parent: 'raideternalpalace', types: ['WEAKAURA'], games: ['bfa']},
      'raideternalpalace7': {slug: 'pve/the-eternal-palace/herald-of-nzoth', i18n: 'warcraft:bosses.151586', domain: 0, parent: 'raideternalpalace', types: ['WEAKAURA'], games: ['bfa']},
      'raideternalpalace8': {slug: 'pve/the-eternal-palace/queen-azshara', i18n: 'warcraft:bosses.152910', domain: 0, parent: 'raideternalpalace', types: ['WEAKAURA'], games: ['bfa']},

      'raidcrucible': {slug: 'pve/crucible-of-storms', image: 'cruciblestorms.png', color: '#3329b3', i18n: 'warcraft:zones.10057', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['bfa']},
      'raidcrucible1': {slug: 'pve/crucible-of-storms/the-restless-cabal', i18n: 'warcraft:bosses.146497', domain: 0, parent: 'raidcrucible', types: ['WEAKAURA'], games: ['bfa']},
      'raidcrucible2': {slug: 'pve/crucible-of-storms/uunat-harbinger-of-the-void', i18n: 'warcraft:bosses.145371', domain: 0, parent: 'raidcrucible', types: ['WEAKAURA'], games: ['bfa']},

      'raidzuldazar': {slug: 'pve/battle-of-zuldazar', image: 'zuldazar.png', color: '#4BB21F', i18n: 'warcraft:zones.10076', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['bfa']},
      'raidzuldazar1': {slug: 'pve/battle-of-zuldazar/frida-ironbellows', i18n: 'warcraft:bosses.144680', domain: 0, parent: 'raidzuldazar', types: ['WEAKAURA'], games: ['bfa']},
      'raidzuldazar1b': {slug: 'pve/battle-of-zuldazar/ra-wani-kanae', i18n: 'warcraft:bosses.144683', domain: 0, parent: 'raidzuldazar', types: ['WEAKAURA'], games: ['bfa']},
      'raidzuldazar2': {slug: 'pve/battle-of-zuldazar/grong-the-jungle-lord', i18n: 'warcraft:bosses.147268', domain: 0, parent: 'raidzuldazar', types: ['WEAKAURA'], games: ['bfa']},
      'raidzuldazar2b': {slug: 'pve/battle-of-zuldazar/grong-the-revenant', i18n: 'warcraft:bosses.144638', domain: 0, parent: 'raidzuldazar', types: ['WEAKAURA'], games: ['bfa']},
      'raidzuldazar3': {slug: 'pve/battle-of-zuldazar/flamefist-and-the-illuminated', i18n: 'warcraft:bosses.146099', domain: 0, parent: 'raidzuldazar', types: ['WEAKAURA'], games: ['bfa']},
      'raidzuldazar3b': {slug: 'pve/battle-of-zuldazar/grimfang-and-firecaller', i18n: 'warcraft:bosses.144691', domain: 0, parent: 'raidzuldazar', types: ['WEAKAURA'], games: ['bfa']},
      'raidzuldazar4': {slug: 'pve/battle-of-zuldazar/high-tinker-mekkatorque', i18n: 'warcraft:bosses.147589', domain: 0, parent: 'raidzuldazar', types: ['WEAKAURA'], games: ['bfa']},
      'raidzuldazar4b': {slug: 'pve/battle-of-zuldazar/king-rastakhan', i18n: 'warcraft:bosses.139633', domain: 0, parent: 'raidzuldazar', types: ['WEAKAURA'], games: ['bfa']},
      'raidzuldazar5': {slug: 'pve/battle-of-zuldazar/stormwall-blockade', i18n: 'warcraft:bosses.146256', domain: 0, parent: 'raidzuldazar', types: ['WEAKAURA'], games: ['bfa']},
      'raidzuldazar6': {slug: 'pve/battle-of-zuldazar/conclave-of-the-chosen', i18n: 'warcraft:bosses.144747', domain: 0, parent: 'raidzuldazar', types: ['WEAKAURA'], games: ['bfa']},
      'raidzuldazar7': {slug: 'pve/battle-of-zuldazar/opulence', i18n: 'warcraft:bosses.147564', domain: 0, parent: 'raidzuldazar', types: ['WEAKAURA'], games: ['bfa']},
      'raidzuldazar8': {slug: 'pve/battle-of-zuldazar/jaina-proudmoore', i18n: 'warcraft:bosses.133251', domain: 0, parent: 'raidzuldazar', types: ['WEAKAURA'], games: ['bfa']},

      'raiduldir': {slug: 'pve/uldir', image: 'uldir.png', color: '#D42D20', i18n: 'warcraft:zones.9389', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['bfa']},
      'raiduldir1': {slug: 'pve/uldir/taloc-the-corrupted', i18n: 'warcraft:bosses.137119', domain: 0, parent: 'raiduldir', types: ['WEAKAURA'], games: ['bfa']},
      'raiduldir2': {slug: 'pve/uldir/mother', i18n: 'warcraft:bosses.140853', domain: 0, parent: 'raiduldir', types: ['WEAKAURA'], games: ['bfa']},
      'raiduldir3': {slug: 'pve/uldir/fetid-devourer', i18n: 'warcraft:bosses.133298', domain: 0, parent: 'raiduldir', types: ['WEAKAURA'], games: ['bfa']},
      'raiduldir4': {slug: 'pve/uldir/zekvoz-herald-of-nzoth', i18n: 'warcraft:bosses.134445', domain: 0, parent: 'raiduldir', types: ['WEAKAURA'], games: ['bfa']},
      'raiduldir5': {slug: 'pve/uldir/zul-reborn', i18n: 'warcraft:bosses.138967', domain: 0, parent: 'raiduldir', types: ['WEAKAURA'], games: ['bfa']},
      'raiduldir6': {slug: 'pve/uldir/mythrax-the-unraveler', i18n: 'warcraft:bosses.136383', domain: 0, parent: 'raiduldir', types: ['WEAKAURA'], games: ['bfa']},
      'raiduldir7': {slug: 'pve/uldir/vectis', i18n: 'warcraft:bosses.134442', domain: 0, parent: 'raiduldir', types: ['WEAKAURA'], games: ['bfa']},
      'raiduldir8': {slug: 'pve/uldir/ghuun', i18n: 'warcraft:bosses.132998', domain: 0, parent: 'raiduldir', types: ['WEAKAURA'], games: ['bfa']},

      'bfadungeon': {slug: 'pve/bfa-dungeons', image: 'dungeon.png', color: '#F5A623', i18n: 'BFA Dungeons', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['bfa']},
      'bfadungeon1': {slug: 'pve/bfa-dungeons/atal-dazar', i18n: 'warcraft:zones.9028', domain: 0, parent: 'bfadungeon', types: ['WEAKAURA'], games: ['bfa']},
      'bfadungeon2': {slug: 'pve/bfa-dungeons/freehold', i18n: 'warcraft:zones.9164', domain: 0, parent: 'bfadungeon', types: ['WEAKAURA'], games: ['bfa']},
      'bfadungeon3': {slug: 'pve/bfa-dungeons/kings-rest', i18n: 'warcraft:zones.9526', domain: 0, parent: 'bfadungeon', types: ['WEAKAURA'], games: ['bfa']},
      'bfadungeon4': {slug: 'pve/bfa-dungeons/shrine-of-the-storm', i18n: 'warcraft:zones.9525', domain: 0, parent: 'bfadungeon', types: ['WEAKAURA'], games: ['bfa']},
      'bfadungeon5': {slug: 'pve/bfa-dungeons/siege-of-boralus', i18n: 'warcraft:zones.9354', domain: 0, parent: 'bfadungeon', types: ['WEAKAURA'], games: ['bfa']},
      'bfadungeon6': {slug: 'pve/bfa-dungeons/temple-of-sethraliss', i18n: 'warcraft:zones.9527', domain: 0, parent: 'bfadungeon', types: ['WEAKAURA'], games: ['bfa']},
      'bfadungeon7': {slug: 'pve/bfa-dungeons/the-motherlode', i18n: 'warcraft:zones.8064', domain: 0, parent: 'bfadungeon', types: ['WEAKAURA'], games: ['bfa']},
      'bfadungeon8': {slug: 'pve/bfa-dungeons/the-underrot', i18n: 'warcraft:zones.9391', domain: 0, parent: 'bfadungeon', types: ['WEAKAURA'], games: ['bfa']},
      'bfadungeon9': {slug: 'pve/bfa-dungeons/tol-dagor', i18n: 'warcraft:zones.9327', domain: 0, parent: 'bfadungeon', types: ['WEAKAURA'], games: ['bfa']},
      'bfadungeon10': {slug: 'pve/bfa-dungeons/waycrest-manor', i18n: 'warcraft:zones.9424', domain: 0, parent: 'bfadungeon', types: ['WEAKAURA'], games: ['bfa']},
      'bfadungeon11': {slug: 'pve/bfa-dungeons/operation-mechagon', i18n: 'warcraft:zones.10225', domain: 0, parent: 'bfadungeon', types: ['WEAKAURA'], games: ['bfa']},

      // legion
      'raidantorus': {slug: 'pve/antorus-the-burning-throne', image: 'antorus.png', color: '#1978aa', i18n: 'warcraft:zones.8638', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['legion']},
      'raidantorus1': {slug: 'pve/antorus-the-burning-throne/garothi-worldbreaker', i18n: 'warcraft:bosses.123371', domain: 0, parent: 'raidantorus', types: ['WEAKAURA'], games: ['legion']},
      'raidantorus2': {slug: 'pve/antorus-the-burning-throne/hounds-of-sargeras', i18n: 'warcraft:bosses.126915', domain: 0, parent: 'raidantorus', types: ['WEAKAURA'], games: ['legion']},
      'raidantorus3': {slug: 'pve/antorus-the-burning-throne/antoran-high-command', i18n: 'warcraft:bosses.122367', domain: 0, parent: 'raidantorus', types: ['WEAKAURA'], games: ['legion']},
      'raidantorus4': {slug: 'pve/antorus-the-burning-throne/portal-keeper-hasabel', i18n: 'warcraft:bosses.124393', domain: 0, parent: 'raidantorus', types: ['WEAKAURA'], games: ['legion']},
      'raidantorus5': {slug: 'pve/antorus-the-burning-throne/eonar-the-lifebender', i18n: 'warcraft:bosses.125562', domain: 0, parent: 'raidantorus', types: ['WEAKAURA'], games: ['legion']},
      'raidantorus6': {slug: 'pve/antorus-the-burning-throne/imonar-the-soulhunter', i18n: 'warcraft:bosses.125055', domain: 0, parent: 'raidantorus', types: ['WEAKAURA'], games: ['legion']},
      'raidantorus7': {slug: 'pve/antorus-the-burning-throne/kingaroth', i18n: 'warcraft:bosses.125050', domain: 0, parent: 'raidantorus', types: ['WEAKAURA'], games: ['legion']},
      'raidantorus8': {slug: 'pve/antorus-the-burning-throne/varimathras', i18n: 'warcraft:bosses.125075', domain: 0, parent: 'raidantorus', types: ['WEAKAURA'], games: ['legion']},
      'raidantorus9': {slug: 'pve/antorus-the-burning-throne/the-coven-of-shivarra', i18n: 'warcraft:bosses.122468', domain: 0, parent: 'raidantorus', types: ['WEAKAURA'], games: ['legion']},
      'raidantorus10': {slug: 'pve/antorus-the-burning-throne/aggramar', i18n: 'warcraft:bosses.124691', domain: 0, parent: 'raidantorus', types: ['WEAKAURA'], games: ['legion']},
      'raidantorus11': {slug: 'pve/antorus-the-burning-throne/argus-the-unmaker', i18n: 'warcraft:bosses.124828', domain: 0, parent: 'raidantorus', types: ['WEAKAURA'], games: ['legion']},

      'raidtomb': {slug: 'pve/tomb-of-sargeras', image: 'tombofsarg.png', color: '#006d35', i18n: 'warcraft:zones.8524', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['legion']},
      'raidtomb1': {slug: 'pve/tomb-of-sargeras/goroth', i18n: 'warcraft:bosses.115844', domain: 0, parent: 'raidtomb', types: ['WEAKAURA'], games: ['legion']},
      'raidtomb2': {slug: 'pve/tomb-of-sargeras/demonic-inquisition', i18n: 'warcraft:bosses.116689', domain: 0, parent: 'raidtomb', types: ['WEAKAURA'], games: ['legion']},
      'raidtomb3': {slug: 'pve/tomb-of-sargeras/harjatan-the-bludger', i18n: 'warcraft:bosses.116407', domain: 0, parent: 'raidtomb', types: ['WEAKAURA'], games: ['legion']},
      'raidtomb4': {slug: 'pve/tomb-of-sargeras/mistress-sasszine', i18n: 'warcraft:bosses.115767', domain: 0, parent: 'raidtomb', types: ['WEAKAURA'], games: ['legion']},
      'raidtomb5': {slug: 'pve/tomb-of-sargeras/sisters-of-the-moon', i18n: 'warcraft:bosses.118523', domain: 0, parent: 'raidtomb', types: ['WEAKAURA'], games: ['legion']},
      'raidtomb6': {slug: 'pve/tomb-of-sargeras/the-desolate-host', i18n: 'warcraft:bosses.118460', domain: 0, parent: 'raidtomb', types: ['WEAKAURA'], games: ['legion']},
      'raidtomb7': {slug: 'pve/tomb-of-sargeras/maiden-of-vigilance', i18n: 'warcraft:bosses.118289', domain: 0, parent: 'raidtomb', types: ['WEAKAURA'], games: ['legion']},
      'raidtomb8': {slug: 'pve/tomb-of-sargeras/fallen-avatar', i18n: 'warcraft:bosses.116939', domain: 0, parent: 'raidtomb', types: ['WEAKAURA'], games: ['legion']},
      'raidtomb9': {slug: 'pve/tomb-of-sargeras/kiljaeden', i18n: 'warcraft:bosses.117269', domain: 0, parent: 'raidtomb', types: ['WEAKAURA'], games: ['legion']},

      'raidnh': {slug: 'pve/nighthold', image: 'nighthold.png', color: '#cb02b7', i18n: 'warcraft:zones.8025', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['legion']},
      'raidnh1': {slug: 'pve/nighthold/skorpyron', i18n: 'warcraft:bosses.102263', domain: 0, parent: 'raidnh', types: ['WEAKAURA'], games: ['legion']},
      'raidnh2': {slug: 'pve/nighthold/chronomatic-anomaly', i18n: 'warcraft:bosses.104415', domain: 0, parent: 'raidnh', types: ['WEAKAURA'], games: ['legion']},
      'raidnh3': {slug: 'pve/nighthold/trilliax', i18n: 'warcraft:bosses.104288', domain: 0, parent: 'raidnh', types: ['WEAKAURA'], games: ['legion']},
      'raidnh4': {slug: 'pve/nighthold/spellblade-aluriel', i18n: 'warcraft:bosses.107699', domain: 0, parent: 'raidnh', types: ['WEAKAURA'], games: ['legion']},
      'raidnh5': {slug: 'pve/nighthold/tichondrius', i18n: 'warcraft:bosses.103685', domain: 0, parent: 'raidnh', types: ['WEAKAURA'], games: ['legion']},
      'raidnh6': {slug: 'pve/nighthold/krosus', i18n: 'warcraft:bosses.101002', domain: 0, parent: 'raidnh', types: ['WEAKAURA'], games: ['legion']},
      'raidnh7': {slug: 'pve/nighthold/high-botanist-telarn', i18n: 'warcraft:bosses.104528', domain: 0, parent: 'raidnh', types: ['WEAKAURA'], games: ['legion']},
      'raidnh8': {slug: 'pve/nighthold/star-augur-etraeus', i18n: 'warcraft:bosses.103758', domain: 0, parent: 'raidnh', types: ['WEAKAURA'], games: ['legion']},
      'raidnh9': {slug: 'pve/nighthold/grand-magistrix-elisande', i18n: 'warcraft:bosses.110965', domain: 0, parent: 'raidnh', types: ['WEAKAURA'], games: ['legion']},
      'raidnh10': {slug: 'pve/nighthold/guldan', i18n: 'warcraft:bosses.105503', domain: 0, parent: 'raidnh', types: ['WEAKAURA'], games: ['legion']},

      'raiden': {slug: 'pve/emerald-nightmare', image: 'emeraldnightmare.png', color: '#6b2100', i18n: 'warcraft:zones.8026', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['legion']},
      'raiden1': {slug: 'pve/emerald-nightmare/nythendra', i18n: 'warcraft:bosses.103160', domain: 0, parent: 'raiden', types: ['WEAKAURA'], games: ['legion']},
      'raiden2': {slug: 'pve/emerald-nightmare/ilgynoth', i18n: 'warcraft:bosses.105393', domain: 0, parent: 'raiden', types: ['WEAKAURA'], games: ['legion']},
      'raiden4': {slug: 'pve/emerald-nightmare/elerethe-renferal', i18n: 'warcraft:bosses.111000', domain: 0, parent: 'raiden', types: ['WEAKAURA'], games: ['legion']},
      'raiden5': {slug: 'pve/emerald-nightmare/ursoc', i18n: 'warcraft:bosses.100497', domain: 0, parent: 'raiden', types: ['WEAKAURA'], games: ['legion']},
      'raiden6': {slug: 'pve/emerald-nightmare/dragons-of-nightmare', i18n: 'warcraft:bosses.102679', domain: 0, parent: 'raiden', types: ['WEAKAURA'], games: ['legion']},
      'raiden7': {slug: 'pve/emerald-nightmare/cenarius', i18n: 'warcraft:bosses.113534', domain: 0, parent: 'raiden', types: ['WEAKAURA'], games: ['legion']},
      'raiden8': {slug: 'pve/emerald-nightmare/xavius', i18n: 'warcraft:bosses.103769', domain: 0, parent: 'raiden', types: ['WEAKAURA'], games: ['legion']},

      'dungeon': {slug: 'pve/legion-dungeons', image: 'dungeon.png', color: '#F5A623', i18n: 'Legion Dungeons', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['legion']},
      'dungeon3': {slug: 'pve/legion-dungeons/arcway', i18n: 'warcraft:zones.7855', domain: 0, parent: 'dungeon', types: ['WEAKAURA'], games: ['legion']},
      'dungeon1': {slug: 'pve/legion-dungeons/assault-on-violet-hold', i18n: 'warcraft:zones.7996', domain: 0, parent: 'dungeon', types: ['WEAKAURA'], games: ['legion']},
      'dungeon4': {slug: 'pve/legion-dungeons/blackrook-hold', i18n: 'warcraft:zones.7805', domain: 0, parent: 'dungeon', types: ['WEAKAURA'], games: ['legion']},
      'dungeon12': {slug: 'pve/legion-dungeons/cathedral-of-eternal-night', i18n: 'warcraft:zones.8527', domain: 0, parent: 'dungeon', types: ['WEAKAURA'], games: ['legion']},
      'dungeon2': {slug: 'pve/legion-dungeons/court-of-stars', i18n: 'warcraft:zones.8079', domain: 0, parent: 'dungeon', types: ['WEAKAURA'], games: ['legion']},
      'dungeon5': {slug: 'pve/legion-dungeons/darkheart-thicket', i18n: 'warcraft:zones.7673', domain: 0, parent: 'dungeon', types: ['WEAKAURA'], games: ['legion']},
      'dungeon6': {slug: 'pve/legion-dungeons/eye-of-azshara', i18n: 'warcraft:zones.8040', domain: 0, parent: 'dungeon', types: ['WEAKAURA'], games: ['legion']},
      'dungeon7': {slug: 'pve/legion-dungeons/halls-of-valor', i18n: 'warcraft:zones.7672', domain: 0, parent: 'dungeon', types: ['WEAKAURA'], games: ['legion']},
      'dungeon8': {slug: 'pve/legion-dungeons/maw-of-souls', i18n: 'warcraft:zones.7812', domain: 0, parent: 'dungeon', types: ['WEAKAURA'], games: ['legion']},
      'dungeon9': {slug: 'pve/legion-dungeons/neltharions-lair', i18n: 'warcraft:zones.7546', domain: 0, parent: 'dungeon', types: ['WEAKAURA'], games: ['legion']},
      'dungeon11': {slug: 'pve/legion-dungeons/return-to-karazhan', i18n: 'warcraft:zones.8443', domain: 0, parent: 'dungeon', types: ['WEAKAURA'], games: ['legion']},
      'dungeon13': {slug: 'pve/legion-dungeons/seat-of-the-triumvirate', i18n: 'warcraft:zones.8910', domain: 0, parent: 'dungeon', types: ['WEAKAURA'], games: ['legion']},
      'dungeon10': {slug: 'pve/legion-dungeons/vault-of-the-wardens', i18n: 'warcraft:zones.7787', domain: 0, parent: 'dungeon', types: ['WEAKAURA'], games: ['legion']},

      // wod
      'raidhfc': {slug: 'pve/hellfire-citadel', image: 'hellfirecitadel.png', color: '#689E12', i18n: 'warcraft:zones.7545', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['wod']},
      'raidhfc1': {slug: 'pve/hellfire-citadel/assault', i18n: 'warcraft:bosses.93023', domain: 0, parent: 'raidhfc', types: ['WEAKAURA'], games: ['wod']},
      'raidhfc2': {slug: 'pve/hellfire-citadel/iron-reaver', i18n: 'warcraft:bosses.90284', domain: 0, parent: 'raidhfc', types: ['WEAKAURA'], games: ['wod']},
      'raidhfc3': {slug: 'pve/hellfire-citadel/kormrok', i18n: 'warcraft:bosses.90435', domain: 0, parent: 'raidhfc', types: ['WEAKAURA'], games: ['wod']},
      'raidhfc4': {slug: 'pve/hellfire-citadel/kilrogg-deadeye', i18n: 'warcraft:bosses.90378', domain: 0, parent: 'raidhfc', types: ['WEAKAURA'], games: ['wod']},
      'raidhfc5': {slug: 'pve/hellfire-citadel/high-council', i18n: 'warcraft:bosses.92146', domain: 0, parent: 'raidhfc', types: ['WEAKAURA'], games: ['wod']},
      'raidhfc6': {slug: 'pve/hellfire-citadel/gorefiend', i18n: 'warcraft:bosses.90199', domain: 0, parent: 'raidhfc', types: ['WEAKAURA'], games: ['wod']},
      'raidhfc7': {slug: 'pve/hellfire-citadel/shadow-lord-iskar', i18n: 'warcraft:bosses.90316', domain: 0, parent: 'raidhfc', types: ['WEAKAURA'], games: ['wod']},
      'raidhfc8': {slug: 'pve/hellfire-citadel/socrethar-the-eternal', i18n: 'warcraft:bosses.90296', domain: 0, parent: 'raidhfc', types: ['WEAKAURA'], games: ['wod']},
      'raidhfc9': {slug: 'pve/hellfire-citadel/tyrant-velhari', i18n: 'warcraft:bosses.90269', domain: 0, parent: 'raidhfc', types: ['WEAKAURA'], games: ['wod']},
      'raidhfc10': {slug: 'pve/hellfire-citadel/fel-lord-zakuun', i18n: 'warcraft:bosses.89890', domain: 0, parent: 'raidhfc', types: ['WEAKAURA'], games: ['wod']},
      'raidhfc11': {slug: 'pve/hellfire-citadel/xhulhorac', i18n: 'warcraft:bosses.93068', domain: 0, parent: 'raidhfc', types: ['WEAKAURA'], games: ['wod']},
      'raidhfc12': {slug: 'pve/hellfire-citadel/mannoroth', i18n: 'warcraft:bosses.91349', domain: 0, parent: 'raidhfc', types: ['WEAKAURA'], games: ['wod']},
      'raidhfc13': {slug: 'pve/hellfire-citadel/archimonde', i18n: 'warcraft:bosses.91331', domain: 0, parent: 'raidhfc', types: ['WEAKAURA'], games: ['wod']},

      'raidtov': {slug: 'pve/trial-of-valor', image: 'trialofvalor.png', color: '#8F0995', i18n: 'warcraft:zones.8440', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['wod']},
      'raidtov1': {slug: 'pve/trial-of-valor/odyn', i18n: 'warcraft:bosses.115323', domain: 0, parent: 'raidtov', types: ['WEAKAURA'], games: ['wod']},
      'raidtov2': {slug: 'pve/trial-of-valor/guarm', i18n: 'warcraft:bosses.114344', domain: 0, parent: 'raidtov', types: ['WEAKAURA'], games: ['wod']},
      'raidtov3': {slug: 'pve/trial-of-valor/helya', i18n: 'warcraft:bosses.115323', domain: 0, parent: 'raidtov', types: ['WEAKAURA'], games: ['wod']},

      // tbc
      'raidsw': {slug: 'pve/sunwell-plateau', image: 'sunwell.png', color: '#02FFEA', i18n: 'warcraft:zones.4075', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['tbc']},
      'raidsw1': {slug: 'pve/sunwell-plateau/kalecgos', i18n: 'warcraft:bosses.24850', domain: 0, parent: 'raidsw', types: ['WEAKAURA'], games: ['tbc']},
      'raidsw2': {slug: 'pve/sunwell-plateau/brutallus', i18n: 'warcraft:bosses.24882', domain: 0, parent: 'raidsw', types: ['WEAKAURA'], games: ['tbc']},
      'raidsw3': {slug: 'pve/sunwell-plateau/felmyst', i18n: 'warcraft:bosses.25038', domain: 0, parent: 'raidsw', types: ['WEAKAURA'], games: ['tbc']},
      'raidsw4': {slug: 'pve/sunwell-plateau/eredar-twins', i18n: 'warcraft:bosses.25166', domain: 0, parent: 'raidsw', types: ['WEAKAURA'], games: ['tbc']},
      'raidsw5': {slug: 'pve/sunwell-plateau/muru', i18n: 'warcraft:bosses.25741', domain: 0, parent: 'raidsw', types: ['WEAKAURA'], games: ['tbc']},
      'raidsw6': {slug: 'pve/sunwell-plateau/kiljaeden', i18n: 'warcraft:bosses.25315', domain: 0, parent: 'raidsw', types: ['WEAKAURA'], games: ['tbc']},

      'raidbt': {slug: 'pve/black-temple', image: 'blacktemple.png', color: '#09AD02', i18n: 'warcraft:zones.3959', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['tbc']},
      'raidbt1': {slug: 'pve/black-temple/high-warlord-najentus', i18n: 'warcraft:bosses.22887', domain: 0, parent: 'raidbt', types: ['WEAKAURA'], games: ['tbc']},
      'raidbt2': {slug: 'pve/black-temple/supremus', i18n: 'warcraft:bosses.22898', domain: 0, parent: 'raidbt', types: ['WEAKAURA'], games: ['tbc']},
      'raidbt3': {slug: 'pve/black-temple/shade-of-akama', i18n: 'warcraft:bosses.22841', domain: 0, parent: 'raidbt', types: ['WEAKAURA'], games: ['tbc']},
      'raidbt4': {slug: 'pve/black-temple/teron-gorefiend', i18n: 'warcraft:bosses.22871', domain: 0, parent: 'raidbt', types: ['WEAKAURA'], games: ['tbc']},
      'raidbt5': {slug: 'pve/black-temple/gurtogg-bloodboil', i18n: 'warcraft:bosses.22948', domain: 0, parent: 'raidbt', types: ['WEAKAURA'], games: ['tbc']},
      'raidbt6': {slug: 'pve/black-temple/reliquary-of-the-lost', i18n: 'warcraft:bosses.22856', domain: 0, parent: 'raidbt', types: ['WEAKAURA'], games: ['tbc']},
      'raidbt7': {slug: 'pve/black-temple/mother-shahraz', i18n: 'warcraft:bosses.22947', domain: 0, parent: 'raidbt', types: ['WEAKAURA'], games: ['tbc']},
      'raidbt8': {slug: 'pve/black-temple/the-illidari-council', i18n: 'warcraft:bosses.23426', domain: 0, parent: 'raidbt', types: ['WEAKAURA'], games: ['tbc']},
      'raidbt9': {slug: 'pve/black-temple/illidan-stormrage', i18n: 'warcraft:bosses.22917', domain: 0, parent: 'raidbt', types: ['WEAKAURA'], games: ['tbc']},

      'raidmthyjal': {slug: 'pve/hyjal-summit', image: 'mthyjal.png', color: '#FF492D', i18n: 'warcraft:zones.3606', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['tbc']},
      'raidmthyjal1': {slug: 'pve/hyjal-summit/rage-winterchill', i18n: 'warcraft:bosses.17767', domain: 0, parent: 'raidmthyjal', types: ['WEAKAURA'], games: ['tbc']},
      'raidmthyjal2': {slug: 'pve/hyjal-summit/anetheron', i18n: 'warcraft:bosses.17808', domain: 0, parent: 'raidmthyjal', types: ['WEAKAURA'], games: ['tbc']},
      'raidmthyjal3': {slug: 'pve/hyjal-summit/kazrogal', i18n: 'warcraft:bosses.17888', domain: 0, parent: 'raidmthyjal', types: ['WEAKAURA'], games: ['tbc']},
      'raidmthyjal4': {slug: 'pve/hyjal-summit/azgalor', i18n: 'warcraft:bosses.17842', domain: 0, parent: 'raidmthyjal', types: ['WEAKAURA'], games: ['tbc']},
      'raidmthyjal5': {slug: 'pve/hyjal-summit/archimonde', i18n: 'warcraft:bosses.17968', domain: 0, parent: 'raidmthyjal', types: ['WEAKAURA'], games: ['tbc']},

      'raidssc': {slug: 'pve/serpent-shrine-cavern', image: 'serpentshrine.png', color: '#48FF98', i18n: 'warcraft:zones.3607', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['tbc']},
      'raidssc1': {slug: 'pve/serpent-shrine-cavern/hydross-the-unstable', i18n: 'warcraft:bosses.21216', domain: 0, parent: 'raidssc', types: ['WEAKAURA'], games: ['tbc']},
      'raidssc2': {slug: 'pve/serpent-shrine-cavern/the-lurker-below', i18n: 'warcraft:bosses.21217', domain: 0, parent: 'raidssc', types: ['WEAKAURA'], games: ['tbc']},
      'raidssc3': {slug: 'pve/serpent-shrine-cavern/leotheras-the-blind', i18n: 'warcraft:bosses.21215', domain: 0, parent: 'raidssc', types: ['WEAKAURA'], games: ['tbc']},
      'raidssc4': {slug: 'pve/serpent-shrine-cavern/fathom-lord-karathress', i18n: 'warcraft:bosses.21214', domain: 0, parent: 'raidssc', types: ['WEAKAURA'], games: ['tbc']},
      'raidssc5': {slug: 'pve/serpent-shrine-cavern/morogrim-tidewalker', i18n: 'warcraft:bosses.21213', domain: 0, parent: 'raidssc', types: ['WEAKAURA'], games: ['tbc']},
      'raidssc6': {slug: 'pve/serpent-shrine-cavern/lady-vashj', i18n: 'warcraft:bosses.21212', domain: 0, parent: 'raidssc', types: ['WEAKAURA'], games: ['tbc']},

      'raidtk': {slug: 'pve/the-eye', image: 'tempestkeep.png', color: '#FF2DC8', i18n: 'warcraft:zones.3845', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['tbc']},
      'raidtk1': {slug: 'pve/the-eye/void-reaver', i18n: 'warcraft:bosses.19516', domain: 0, parent: 'raidtk', types: ['WEAKAURA'], games: ['tbc']},
      'raidtk2': {slug: 'pve/the-eye/alar', i18n: 'warcraft:bosses.19514', domain: 0, parent: 'raidtk', types: ['WEAKAURA'], games: ['tbc']},
      'raidtk3': {slug: 'pve/the-eye/high-astromancer-solarian', i18n: 'warcraft:bosses.18805', domain: 0, parent: 'raidtk', types: ['WEAKAURA'], games: ['tbc']},
      'raidtk4': {slug: 'pve/the-eye/kaelthas-sunstrider', i18n: 'warcraft:bosses.19622', domain: 0, parent: 'raidtk', types: ['WEAKAURA'], games: ['tbc']},

      'raidgruul': {slug: 'pve/lairs-of-giants', image: 'gruul.png', color: '#FF8748', i18n: 'warcraft:zones.lairs', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['tbc']},
      'raidgruul1': {slug: 'pve/lairs-of-giants/high-king-maulgar', i18n: 'warcraft:bosses.18831', domain: 0, parent: 'raidgruul', types: ['WEAKAURA'], games: ['tbc']},
      'raidgruul2': {slug: 'pve/lairs-of-giants/gruul-the-dragonkiller', i18n: 'warcraft:bosses.19044', domain: 0, parent: 'raidgruul', types: ['WEAKAURA'], games: ['tbc']},
      'raidgruul3': {slug: 'pve/lairs-of-giants/magtheridon', i18n: 'warcraft:bosses.17257', domain: 0, parent: 'raidgruul', types: ['WEAKAURA'], games: ['tbc']},

      'raidkarazhan': {slug: 'pve/karazhan', image: 'karazhan.png', color: '#48BAFF', i18n: 'warcraft:zones.3475', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['tbc']},
      'raidkarazhan1': {slug: 'pve/karazhan/attumen-the-huntsman', i18n: 'warcraft:bosses.16152', domain: 0, parent: 'raidkarazhan', types: ['WEAKAURA'], games: ['tbc']},
      'raidkarazhan2': {slug: 'pve/karazhan/moroes', i18n: 'warcraft:bosses.15687', domain: 0, parent: 'raidkarazhan', types: ['WEAKAURA'], games: ['tbc']},
      'raidkarazhan3': {slug: 'pve/karazhan/maiden-of-virtue', i18n: 'warcraft:bosses.16457', domain: 0, parent: 'raidkarazhan', types: ['WEAKAURA'], games: ['tbc']},
      'raidkarazhan4a': {slug: 'pve/karazhan/wizard-of-oz', i18n: 'warcraft:bosses.18168', domain: 0, parent: 'raidkarazhan', types: ['WEAKAURA'], games: ['tbc']},
      'raidkarazhan4b': {slug: 'pve/karazhan/the-big-bad-wolf', i18n: 'warcraft:bosses.17521', domain: 0, parent: 'raidkarazhan', types: ['WEAKAURA'], games: ['tbc']},
      'raidkarazhan4c': {slug: 'pve/karazhan/romulo-and-julianne', i18n: 'warcraft:bosses.17533', domain: 0, parent: 'raidkarazhan', types: ['WEAKAURA'], games: ['tbc']},
      'raidkarazhan5': {slug: 'pve/karazhan/the-curator', i18n: 'warcraft:bosses.15691', domain: 0, parent: 'raidkarazhan', types: ['WEAKAURA'], games: ['tbc']},
      'raidkarazhan6': {slug: 'pve/karazhan/chess-event', i18n: 'warcraft:bosses.185119', domain: 0, parent: 'raidkarazhan', types: ['WEAKAURA'], games: ['tbc']},
      'raidkarazhan7': {slug: 'pve/karazhan/terestian-illhoof', i18n: 'warcraft:bosses.15688', domain: 0, parent: 'raidkarazhan', types: ['WEAKAURA'], games: ['tbc']},
      'raidkarazhan8': {slug: 'pve/karazhan/shade-of-aran', i18n: 'warcraft:bosses.16524', domain: 0, parent: 'raidkarazhan', types: ['WEAKAURA'], games: ['tbc']},
      'raidkarazhan9': {slug: 'pve/karazhan/netherspite', i18n: 'warcraft:bosses.15689', domain: 0, parent: 'raidkarazhan', types: ['WEAKAURA'], games: ['tbc']},
      'raidkarazhan10': {slug: 'pve/karazhan/nightbane', i18n: 'warcraft:bosses.17225', domain: 0, parent: 'raidkarazhan', types: ['WEAKAURA'], games: ['tbc']},
      'raidkarazhan11': {slug: 'pve/karazhan/prince-malchezaar', i18n: 'warcraft:bosses.15690', domain: 0, parent: 'raidkarazhan', types: ['WEAKAURA'], games: ['tbc']},

      'tbcdungeon': {slug: 'pve/tbc-dungeons', image: 'dungeontbc.png', color: '#F5A623', i18n: 'TBC Dungeons', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['tbc']},
      'tbcdungeon1': {slug: 'pve/tbc-dungeons/hellfire-ramparts', i18n: 'warcraft:zones.3562', domain: 0, parent: 'tbcdungeon', types: ['WEAKAURA'], games: ['tbc']},
      'tbcdungeon2': {slug: 'pve/tbc-dungeons/the-blood-furnace', i18n: 'warcraft:zones.3713', domain: 0, parent: 'tbcdungeon', types: ['WEAKAURA'], games: ['tbc']},
      'tbcdungeon3': {slug: 'pve/tbc-dungeons/the-shattered-halls', i18n: 'warcraft:zones.3714', domain: 0, parent: 'tbcdungeon', types: ['WEAKAURA'], games: ['tbc']},
      'tbcdungeon4': {slug: 'pve/tbc-dungeons/the-slave-pens', i18n: 'warcraft:zones.3717', domain: 0, parent: 'tbcdungeon', types: ['WEAKAURA'], games: ['tbc']},
      'tbcdungeon5': {slug: 'pve/tbc-dungeons/the-underbog', i18n: 'warcraft:zones.3716', domain: 0, parent: 'tbcdungeon', types: ['WEAKAURA'], games: ['tbc']},
      'tbcdungeon6': {slug: 'pve/tbc-dungeons/the-steamvault', i18n: 'warcraft:zones.3715', domain: 0, parent: 'tbcdungeon', types: ['WEAKAURA'], games: ['tbc']},
      'tbcdungeon7': {slug: 'pve/tbc-dungeons/mana-tombs', i18n: 'warcraft:zones.3792', domain: 0, parent: 'tbcdungeon', types: ['WEAKAURA'], games: ['tbc']},
      'tbcdungeon8': {slug: 'pve/tbc-dungeons/auchenai-crypts', i18n: 'warcraft:zones.3790', domain: 0, parent: 'tbcdungeon', types: ['WEAKAURA'], games: ['tbc']},
      'tbcdungeon9': {slug: 'pve/tbc-dungeons/sethekk-halls', i18n: 'warcraft:zones.3791', domain: 0, parent: 'tbcdungeon', types: ['WEAKAURA'], games: ['tbc']},
      'tbcdungeon10': {slug: 'pve/tbc-dungeons/shadow-labyrinth', i18n: 'warcraft:zones.3789', domain: 0, parent: 'tbcdungeon', types: ['WEAKAURA'], games: ['tbc']},
      'tbcdungeon11': {slug: 'pve/tbc-dungeons/the-mechanar', i18n: 'warcraft:zones.3849', domain: 0, parent: 'tbcdungeon', types: ['WEAKAURA'], games: ['tbc']},
      'tbcdungeon12': {slug: 'pve/tbc-dungeons/the-botanica', i18n: 'warcraft:zones.3847', domain: 0, parent: 'tbcdungeon', types: ['WEAKAURA'], games: ['tbc']},
      'tbcdungeon13': {slug: 'pve/tbc-dungeons/magisters-terrace', i18n: 'warcraft:zones.4131', domain: 0, parent: 'tbcdungeon', types: ['WEAKAURA'], games: ['tbc']},

      // classic
      'raidnaxxramas': {slug: 'pve/naxxramas', image: 'naxxramas.png', color: '#B3ACAC', i18n: 'warcraft:zones.3456', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['classic']},
      'raidnaxxramas1': {slug: 'pve/naxxramas/anub-rekhan', i18n: 'warcraft:bosses.15956', domain: 0, parent: 'raidnaxxramas', types: ['WEAKAURA'], games: ['classic']},
      'raidnaxxramas2': {slug: 'pve/naxxramas/grand-widow-faerlina', i18n: 'warcraft:bosses.15953', domain: 0, parent: 'raidnaxxramas', types: ['WEAKAURA'], games: ['classic']},
      'raidnaxxramas3': {slug: 'pve/naxxramas/maexxna', i18n: 'warcraft:bosses.15952', domain: 0, parent: 'raidnaxxramas', types: ['WEAKAURA'], games: ['classic']},
      'raidnaxxramas4': {slug: 'pve/naxxramas/noth-the-plaguebringer', i18n: 'warcraft:bosses.15954', domain: 0, parent: 'raidnaxxramas', types: ['WEAKAURA'], games: ['classic']},
      'raidnaxxramas5': {slug: 'pve/naxxramas/heigan-the-unclean', i18n: 'warcraft:bosses.15936', domain: 0, parent: 'raidnaxxramas', types: ['WEAKAURA'], games: ['classic']},
      'raidnaxxramas6': {slug: 'pve/naxxramas/loatheb', i18n: 'warcraft:bosses.16011', domain: 0, parent: 'raidnaxxramas', types: ['WEAKAURA'], games: ['classic']},
      'raidnaxxramas7': {slug: 'pve/naxxramas/patchwerk', i18n: 'warcraft:bosses.16028', domain: 0, parent: 'raidnaxxramas', types: ['WEAKAURA'], games: ['classic']},
      'raidnaxxramas8': {slug: 'pve/naxxramas/grobbulus', i18n: 'warcraft:bosses.15931', domain: 0, parent: 'raidnaxxramas', types: ['WEAKAURA'], games: ['classic']},
      'raidnaxxramas9': {slug: 'pve/naxxramas/gluth', i18n: 'warcraft:bosses.15932', domain: 0, parent: 'raidnaxxramas', types: ['WEAKAURA'], games: ['classic']},
      'raidnaxxramas10': {slug: 'pve/naxxramas/thaddius', i18n: 'warcraft:bosses.15928', domain: 0, parent: 'raidnaxxramas', types: ['WEAKAURA'], games: ['classic']},
      'raidnaxxramas11': {slug: 'pve/naxxramas/instructor-razuvious', i18n: 'warcraft:bosses.16061', domain: 0, parent: 'raidnaxxramas', types: ['WEAKAURA'], games: ['classic']},
      'raidnaxxramas12': {slug: 'pve/naxxramas/gothik-the-harvester', i18n: 'warcraft:bosses.16060', domain: 0, parent: 'raidnaxxramas', types: ['WEAKAURA'], games: ['classic']},
      'raidnaxxramas13': {slug: 'pve/naxxramas/the-four-horsemen', i18n: 'warcraft:bosses.181366', domain: 0, parent: 'raidnaxxramas', types: ['WEAKAURA'], games: ['classic']},
      'raidnaxxramas14': {slug: 'pve/naxxramas/sapphiron', i18n: 'warcraft:bosses.15989', domain: 0, parent: 'raidnaxxramas', types: ['WEAKAURA'], games: ['classic']},
      'raidnaxxramas15': {slug: 'pve/naxxramas/kel-thuzad', i18n: 'warcraft:bosses.15990', domain: 0, parent: 'raidnaxxramas', types: ['WEAKAURA'], games: ['classic']},

      'raidtempleaq': {slug: 'pve/temple-of-ahn-qiraj', image: 'aq40.png', color: '#DF86B2', i18n: 'warcraft:zones.3428', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['classic']},
      'raidtempleaq1': {slug: 'pve/temple-of-ahn-qiraj/the-prophet-skeram', i18n: 'warcraft:bosses.15263', domain: 0, parent: 'raidtempleaq', types: ['WEAKAURA'], games: ['classic']},
      'raidtempleaq2': {slug: 'pve/temple-of-ahn-qiraj/bug-trio', i18n: 'warcraft:bosses.15543', domain: 0, parent: 'raidtempleaq', types: ['WEAKAURA'], games: ['classic']},
      'raidtempleaq3': {slug: 'pve/temple-of-ahn-qiraj/battleguard-sartura', i18n: 'warcraft:bosses.15516', domain: 0, parent: 'raidtempleaq', types: ['WEAKAURA'], games: ['classic']},
      'raidtempleaq4': {slug: 'pve/temple-of-ahn-qiraj/fankriss-the-undying', i18n: 'warcraft:bosses.15510', domain: 0, parent: 'raidtempleaq', types: ['WEAKAURA'], games: ['classic']},
      'raidtempleaq5': {slug: 'pve/temple-of-ahn-qiraj/viscidus', i18n: 'warcraft:bosses.15299', domain: 0, parent: 'raidtempleaq', types: ['WEAKAURA'], games: ['classic']},
      'raidtempleaq6': {slug: 'pve/temple-of-ahn-qiraj/princess-huhuran', i18n: 'warcraft:bosses.15509', domain: 0, parent: 'raidtempleaq', types: ['WEAKAURA'], games: ['classic']},
      'raidtempleaq7': {slug: 'pve/temple-of-ahn-qiraj/twin-emperors', i18n: 'warcraft:bosses.15276', domain: 0, parent: 'raidtempleaq', types: ['WEAKAURA'], games: ['classic']},
      'raidtempleaq8': {slug: 'pve/temple-of-ahn-qiraj/ouro', i18n: 'warcraft:bosses.15517', domain: 0, parent: 'raidtempleaq', types: ['WEAKAURA'], games: ['classic']},
      'raidtempleaq9': {slug: 'pve/temple-of-ahn-qiraj/cthun', i18n: 'warcraft:bosses.15727', domain: 0, parent: 'raidtempleaq', types: ['WEAKAURA'], games: ['classic']},

      'raidruinsaq': {slug: 'pve/ruins-of-ahn-qiraj', image: 'aq20.png', color: '#00EE7A', i18n: 'warcraft:zones.3429', domain: 0, parent: 'raidruinsaq', types: ['WEAKAURA', 'COLLECTION'], games: ['classic']},
      'raidruinsaq1': {slug: 'pve/ruins-of-ahn-qiraj/kurinaxx', i18n: 'warcraft:bosses.15348', domain: 0, parent: 'raidruinsaq', types: ['WEAKAURA'], games: ['classic']},
      'raidruinsaq2': {slug: 'pve/ruins-of-ahn-qiraj/general-rajaxx', i18n: 'warcraft:bosses.15341', domain: 0, parent: 'raidruinsaq', types: ['WEAKAURA'], games: ['classic']},
      'raidruinsaq3': {slug: 'pve/ruins-of-ahn-qiraj/moam', i18n: 'warcraft:bosses.15340', domain: 0, parent: 'raidruinsaq', types: ['WEAKAURA'], games: ['classic']},
      'raidruinsaq4': {slug: 'pve/ruins-of-ahn-qiraj/buru-the-gorger', i18n: 'warcraft:bosses.15370', domain: 0, parent: 'raidruinsaq', types: ['WEAKAURA'], games: ['classic']},
      'raidruinsaq5': {slug: 'pve/ruins-of-ahn-qiraj/ayamiss-the-hunter', i18n: 'warcraft:bosses.15369', domain: 0, parent: 'raidruinsaq', types: ['WEAKAURA'], games: ['classic']},
      'raidruinsaq6': {slug: 'pve/ruins-of-ahn-qiraj/ossirian-the-unscarred', i18n: 'warcraft:bosses.15339', domain: 0, parent: 'raidruinsaq', types: ['WEAKAURA'], games: ['classic']},

      'raidzulgurub': {slug: 'pve/zul-gurub', image: 'zulgurub.png', color: '#B8FF25', i18n: 'warcraft:zones.1977', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['classic']},
      'raidzulgurub2': {slug: 'pve/zul-gurub/high-priestess-jeklik', i18n: 'warcraft:bosses.14517', domain: 0, parent: 'raidzulgurub', types: ['WEAKAURA'], games: ['classic']},
      'raidzulgurub1': {slug: 'pve/zul-gurub/high-priest-venoxis', i18n: 'warcraft:bosses.14507', domain: 0, parent: 'raidzulgurub', types: ['WEAKAURA'], games: ['classic']},
      'raidzulgurub3': {slug: 'pve/zul-gurub/high-priestess-mar-li', i18n: 'warcraft:bosses.14510', domain: 0, parent: 'raidzulgurub', types: ['WEAKAURA'], games: ['classic']},
      'raidzulgurub6': {slug: 'pve/zul-gurub/bloodlord-mandokir', i18n: 'warcraft:bosses.11382', domain: 0, parent: 'raidzulgurub', types: ['WEAKAURA'], games: ['classic']},
      'raidzulgurub7': {slug: 'pve/zul-gurub/edge-of-madness', i18n: 'warcraft:bosses.15083', domain: 0, parent: 'raidzulgurub', types: ['WEAKAURA'], games: ['classic']},
      'raidzulgurub4': {slug: 'pve/zul-gurub/high-priest-thekal', i18n: 'warcraft:bosses.14509', domain: 0, parent: 'raidzulgurub', types: ['WEAKAURA'], games: ['classic']},
      'raidzulgurub8': {slug: 'pve/zul-gurub/gahzranka', i18n: 'warcraft:bosses.15114', domain: 0, parent: 'raidzulgurub', types: ['WEAKAURA'], games: ['classic']},
      'raidzulgurub5': {slug: 'pve/zul-gurub/high-priestess-arlokk', i18n: 'warcraft:bosses.14515', domain: 0, parent: 'raidzulgurub', types: ['WEAKAURA'], games: ['classic']},
      'raidzulgurub9': {slug: 'pve/zul-gurub/jindo-the-hexer', i18n: 'warcraft:bosses.11380', domain: 0, parent: 'raidzulgurub', types: ['WEAKAURA'], games: ['classic']},
      'raidzulgurub10': {slug: 'pve/zul-gurub/hakkar', i18n: 'warcraft:bosses.14834', domain: 0, parent: 'raidzulgurub', types: ['WEAKAURA'], games: ['classic']},

      'raidblackwinglair': {slug: 'pve/blackwing-lair', image: 'blackwinglair.png', color: '#007AEE', i18n: 'warcraft:zones.2677', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['classic']},
      'raidblackwinglair1': {slug: 'pve/blackwing-lair/razorgore-the-untamed', i18n: 'warcraft:bosses.12435', domain: 0, parent: 'raidblackwinglair', types: ['WEAKAURA'], games: ['classic']},
      'raidblackwinglair2': {slug: 'pve/blackwing-lair/vaelastrasz-the-corrupt', i18n: 'warcraft:bosses.13020', domain: 0, parent: 'raidblackwinglair', types: ['WEAKAURA'], games: ['classic']},
      'raidblackwinglair3': {slug: 'pve/blackwing-lair/broodlord-lashlayer', i18n: 'warcraft:bosses.12017', domain: 0, parent: 'raidblackwinglair', types: ['WEAKAURA'], games: ['classic']},
      'raidblackwinglair4': {slug: 'pve/blackwing-lair/firemaw', i18n: 'warcraft:bosses.11983', domain: 0, parent: 'raidblackwinglair', types: ['WEAKAURA'], games: ['classic']},
      'raidblackwinglair5': {slug: 'pve/blackwing-lair/ebonroc', i18n: 'warcraft:bosses.14601', domain: 0, parent: 'raidblackwinglair', types: ['WEAKAURA'], games: ['classic']},
      'raidblackwinglair6': {slug: 'pve/blackwing-lair/flamegor', i18n: 'warcraft:bosses.11981', domain: 0, parent: 'raidblackwinglair', types: ['WEAKAURA'], games: ['classic']},
      'raidblackwinglair7': {slug: 'pve/blackwing-lair/chromaggus', i18n: 'warcraft:bosses.14020', domain: 0, parent: 'raidblackwinglair', types: ['WEAKAURA'], games: ['classic']},
      'raidblackwinglair8': {slug: 'pve/blackwing-lair/nefarian', i18n: 'warcraft:bosses.11583', domain: 0, parent: 'raidblackwinglair', types: ['WEAKAURA'], games: ['classic']},

      'raidmoltencore': {slug: 'pve/molten-core', image: 'moltencore.png', color: '#F6921A', i18n: 'warcraft:zones.2717', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['classic']},
      'raidmoltencore1': {slug: 'pve/molten-core/lucifron', i18n: 'warcraft:bosses.12118', domain: 0, parent: 'raidmoltencore', types: ['WEAKAURA'], games: ['classic']},
      'raidmoltencore2': {slug: 'pve/molten-core/magmadar', i18n: 'warcraft:bosses.11982', domain: 0, parent: 'raidmoltencore', types: ['WEAKAURA'], games: ['classic']},
      'raidmoltencore3': {slug: 'pve/molten-core/gehennas', i18n: 'warcraft:bosses.12259', domain: 0, parent: 'raidmoltencore', types: ['WEAKAURA'], games: ['classic']},
      'raidmoltencore4': {slug: 'pve/molten-core/garr', i18n: 'warcraft:bosses.12057', domain: 0, parent: 'raidmoltencore', types: ['WEAKAURA'], games: ['classic']},
      'raidmoltencore5': {slug: 'pve/molten-core/shazzrah', i18n: 'warcraft:bosses.12264', domain: 0, parent: 'raidmoltencore', types: ['WEAKAURA'], games: ['classic']},
      'raidmoltencore6': {slug: 'pve/molten-core/baron-geddon', i18n: 'warcraft:bosses.12056', domain: 0, parent: 'raidmoltencore', types: ['WEAKAURA'], games: ['classic']},
      'raidmoltencore7': {slug: 'pve/molten-core/golemagg-the-incinerator', i18n: 'warcraft:bosses.11988', domain: 0, parent: 'raidmoltencore', types: ['WEAKAURA'], games: ['classic']},
      'raidmoltencore8': {slug: 'pve/molten-core/sulfuron-harbinger', i18n: 'warcraft:bosses.12098', domain: 0, parent: 'raidmoltencore', types: ['WEAKAURA'], games: ['classic']},
      'raidmoltencore9': {slug: 'pve/molten-core/majordomo-executus', i18n: 'warcraft:bosses.12018', domain: 0, parent: 'raidmoltencore', types: ['WEAKAURA'], games: ['classic']},
      'raidmoltencore10': {slug: 'pve/molten-core/ragnaros', i18n: 'warcraft:bosses.11502', domain: 0, parent: 'raidmoltencore', types: ['WEAKAURA'], games: ['classic']},

      'raidworld': {slug: 'pve/single-raid', image: 'worldboss.png', color: '#CC0DBC', i18n: 'Single Bosses', domain: 0, types: ['WEAKAURA'], games: ['classic']},
      'raidworld1': {slug: 'pve/single-raid/onyxia', i18n: 'warcraft:bosses.10184', domain: 0, parent: 'raidworld', types: ['WEAKAURA'], games: ['classic']},
      'raidworld2': {slug: 'pve/single-raid/azuregos', i18n: 'warcraft:bosses.6109', domain: 0, parent: 'raidworld', types: ['WEAKAURA'], games: ['classic']},
      'raidworld3': {slug: 'pve/single-raid/kazzak', i18n: 'warcraft:bosses.12397', domain: 0, parent: 'raidworld', types: ['WEAKAURA'], games: ['classic']},
      'raidworld4': {slug: 'pve/single-raid/lethon', i18n: 'warcraft:bosses.14888', domain: 0, parent: 'raidworld', types: ['WEAKAURA'], games: ['classic']},
      'raidworld5': {slug: 'pve/single-raid/emeriss', i18n: 'warcraft:bosses.14889', domain: 0, parent: 'raidworld', types: ['WEAKAURA'], games: ['classic']},
      'raidworld6': {slug: 'pve/single-raid/taerar', i18n: 'warcraft:bosses.14890', domain: 0, parent: 'raidworld', types: ['WEAKAURA'], games: ['classic']},
      'raidworld7': {slug: 'pve/single-raid/ysondre', i18n: 'warcraft:bosses.14887', domain: 0, parent: 'raidworld', types: ['WEAKAURA'], games: ['classic']},

      'classicdungeon': {slug: 'pve/classic-dungeons', image: 'dungeon.png', color: '#F5A623', i18n: 'warcraft:zones.2437', domain: 0, types: ['WEAKAURA', 'COLLECTION'], games: ['classic']},
      'classicdungeon1': {slug: 'pve/classic-dungeons/ragefire-chasm', i18n: 'warcraft:zones.2437', domain: 0, parent: 'classicdungeon', types: ['WEAKAURA'], games: ['classic']},
      'classicdungeon2': {slug: 'pve/classic-dungeons/wailing-caverns', i18n: 'warcraft:zones.718', domain: 0, parent: 'classicdungeon', types: ['WEAKAURA'], games: ['classic']},
      'classicdungeon3': {slug: 'pve/classic-dungeons/the-deadmines', i18n: 'warcraft:zones.1581', domain: 0, parent: 'classicdungeon', types: ['WEAKAURA'], games: ['classic']},
      'classicdungeon4': {slug: 'pve/classic-dungeons/shadowfang-keep', i18n: 'warcraft:zones.209', domain: 0, parent: 'classicdungeon', types: ['WEAKAURA'], games: ['classic']},
      'classicdungeon5': {slug: 'pve/classic-dungeons/blackfathom-deeps', i18n: 'warcraft:zones.719', domain: 0, parent: 'classicdungeon', types: ['WEAKAURA'], games: ['classic']},
      'classicdungeon6': {slug: 'pve/classic-dungeons/the-stockade', i18n: 'warcraft:zones.717', domain: 0, parent: 'classicdungeon', types: ['WEAKAURA'], games: ['classic']},
      'classicdungeon7': {slug: 'pve/classic-dungeons/gnomeregan', i18n: 'warcraft:zones.721', domain: 0, parent: 'classicdungeon', types: ['WEAKAURA'], games: ['classic']},
      'classicdungeon8': {slug: 'pve/classic-dungeons/razorfen-kraul', i18n: 'warcraft:zones.491', domain: 0, parent: 'classicdungeon', types: ['WEAKAURA'], games: ['classic']},
      'classicdungeon9': {slug: 'pve/classic-dungeons/the-scarlet-monastery', i18n: 'warcraft:zones.796', domain: 0, parent: 'classicdungeon', types: ['WEAKAURA'], games: ['classic']},
      'classicdungeon10': {slug: 'pve/classic-dungeons/razorfen-downs', i18n: 'warcraft:zones.722', domain: 0, parent: 'classicdungeon', types: ['WEAKAURA'], games: ['classic']},
      'classicdungeon11': {slug: 'pve/classic-dungeons/uldaman', i18n: 'warcraft:zones.1337', domain: 0, parent: 'classicdungeon', types: ['WEAKAURA'], games: ['classic']},
      'classicdungeon12': {slug: 'pve/classic-dungeons/zul-ferrak', i18n: 'warcraft:zones.1176', domain: 0, parent: 'classicdungeon', types: ['WEAKAURA'], games: ['classic']},
      'classicdungeon13': {slug: 'pve/classic-dungeons/mauradon', i18n: 'warcraft:zones.2100', domain: 0, parent: 'classicdungeon', types: ['WEAKAURA'], games: ['classic']},
      'classicdungeon14': {slug: 'pve/classic-dungeons/temple-of-atal-hakkar', i18n: 'warcraft:zones.1477', domain: 0, parent: 'classicdungeon', types: ['WEAKAURA'], games: ['classic']},
      'classicdungeon15': {slug: 'pve/classic-dungeons/blackrock-depths', i18n: 'warcraft:zones.1584', domain: 0, parent: 'classicdungeon', types: ['WEAKAURA'], games: ['classic']},
      'classicdungeon16': {slug: 'pve/classic-dungeons/blackrock-spire', i18n: 'warcraft:zones.1583', domain: 0, parent: 'classicdungeon', types: ['WEAKAURA'], games: ['classic']},
      'classicdungeon17': {slug: 'pve/classic-dungeons/dire-maul', i18n: 'warcraft:zones.2557', domain: 0, parent: 'classicdungeon', types: ['WEAKAURA'], games: ['classic']},
      'classicdungeon18': {slug: 'pve/classic-dungeons/stratholme', i18n: 'warcraft:zones.2017', domain: 0, parent: 'classicdungeon', types: ['WEAKAURA'], games: ['classic']},
      'classicdungeon19': {slug: 'pve/classic-dungeons/scholomance', i18n: 'warcraft:zones.2057', domain: 0, parent: 'classicdungeon', types: ['WEAKAURA'], games: ['classic']},

      'torghast': {slug: 'pve/torghast', image: 'torghast.png', color: '#D80143', i18n: 'warcraft:zones.Torghast', domain: 0, types: ['WEAKAURA'], games: ['sl']},
      'torghast1': {slug: 'pve/torghast/encounters', i18n: 'Encounters', domain: 0, parent: 'torghast', types: ['WEAKAURA'], games: ['sl']},
      'torghast2': {slug: 'pve/torghast/anima', i18n: 'Anima', domain: 0, parent: 'torghast', types: ['WEAKAURA'], games: ['sl']},

      'pvp': {slug: 'pvp', image: 'pvp.png', color: '#ed1b24', i18n: 'PvP', domain: 0, types: ['WEAKAURA']},
      'arena': {slug: 'pvp/arena', i18n: 'Arena', domain: 0, parent: 'pvp', types: ['WEAKAURA'], games: ['tbc', 'legion', 'bfa', 'sl']},
      'bg': {slug: 'pvp/battlegrounds', i18n: 'Battlegrounds', domain: 0, parent: 'pvp'},
      'wpvp': {slug: 'pvp/world-pvp', i18n: 'World PvP', domain: 0, parent: 'pvp'},
      'wpvp1': {slug: 'pvp/duels', i18n: 'Duels', domain: 0, parent: 'pvp'},

      'prof1': {slug: 'professions/gathering', image: 'gathering.png', color: '#5E63B8', i18n: 'Gathering Professions', domain: 0, types: ['WEAKAURA', 'OPIE']},
      'prof2': {slug: 'professions/gathering/herbalism', i18n: 'warcraft:professions.herbalism', domain: 0, parent: 'prof1', types: ['WEAKAURA', 'OPIE']},
      'prof3': {slug: 'professions/gathering/mining', i18n: 'warcraft:professions.mining', domain: 0, parent: 'prof1', types: ['WEAKAURA', 'OPIE']},
      'prof4': {slug: 'professions/gathering/skinning', i18n: 'warcraft:professions.skinning', domain: 0, parent: 'prof1', types: ['WEAKAURA', 'OPIE']},
      'prof5': {slug: 'professions/crafting', image: 'crafting.png', color: '#B85E5F', i18n: 'Crafting Professions', domain: 0, types: ['WEAKAURA', 'OPIE']},
      'prof6': {slug: 'professions/crafting/alchemy', i18n: 'warcraft:professions.alchemy', domain: 0, parent: 'prof5', types: ['WEAKAURA', 'OPIE']},
      'prof7': {slug: 'professions/crafting/blacksmithing', i18n: 'warcraft:professions.blacksmith', domain: 0, parent: 'prof5', types: ['WEAKAURA', 'OPIE']},
      'prof8': {slug: 'professions/crafting/enchanting', i18n: 'warcraft:professions.enchanting', domain: 0, parent: 'prof5', types: ['WEAKAURA', 'OPIE']},
      'prof9': {slug: 'professions/crafting/engineering', i18n: 'warcraft:professions.engineering', domain: 0, parent: 'prof5', types: ['WEAKAURA', 'OPIE']},
      'prof10': {slug: 'professions/crafting/inscription', i18n: 'warcraft:professions.inscription', domain: 0, parent: 'prof5', types: ['WEAKAURA', 'OPIE'], games: ['legion', 'bfa', 'sl']},
      'prof11': {slug: 'professions/crafting/jewelcrafting', i18n: 'warcraft:professions.jewelcrafting', domain: 0, parent: 'prof5', types: ['WEAKAURA', 'OPIE'], games: ['tbc', 'legion', 'bfa', 'sl']},
      'prof12': {slug: 'professions/crafting/leatherworking', i18n: 'warcraft:professions.leatherworking', domain: 0, parent: 'prof5', types: ['WEAKAURA', 'OPIE']},
      'prof13': {slug: 'professions/crafting/tailoring', i18n: 'warcraft:professions.tailoring', domain: 0, parent: 'prof5', types: ['WEAKAURA', 'OPIE']},
      'prof14': {slug: 'professions/secondary', image: 'secondaryprof.png', color: '#C4C4C4', i18n: 'Secondary Professions', domain: 0, types: ['WEAKAURA', 'OPIE']},
      'prof15': {slug: 'professions/secondary/archeology', i18n: 'warcraft:professions.archeology', domain: 0, parent: 'prof14', types: ['WEAKAURA', 'OPIE'], games: ['legion', 'bfa']},
      'prof16': {slug: 'professions/secondary/cooking', i18n: 'warcraft:professions.cooking', domain: 0, parent: 'prof14', types: ['WEAKAURA', 'OPIE']},
      'prof17': {slug: 'professions/secondary/first-aid', i18n: 'warcraft:professions.firstaid', domain: 0, parent: 'prof14', types: ['WEAKAURA', 'OPIE'], games: ['classic', 'tbc', 'legion']},
      'prof18': {slug: 'professions/secondary/fishing', i18n: 'warcraft:professions.fishing', domain: 0, parent: 'prof14', types: ['WEAKAURA', 'OPIE']},

      'gen5': {slug: 'development', image: 'development.png', color: '#D27B61', i18n: 'Development', domain: 0, types: ['WEAKAURA']},
      'gen3': {slug: 'development/testing', i18n: 'Testing', domain: 0, parent: 'development', types: ['WEAKAURA']},
      'gen4': {slug: 'development/wa-training', i18n: 'WA Training', domain: 0, parent: 'development', types: ['WEAKAURA']},

      'mdtdun15': {slug: 'pve/dungeons/atal-dazar', i18n: 'warcraft:zones.9028', domain: 0, system: true, parent: 'mdtdungeon', types: ['MDT'], games: ['bfa']},
      'mdtdun16': {slug: 'pve/dungeons/freehold', i18n: 'warcraft:zones.9164', domain: 0, system: true, parent: 'mdtdungeon', types: ['MDT'], games: ['bfa']},
      'mdtdun16-crew2': {slug: 'pve/dungeons/freehold/bilge-rats', i18n: 'Bilge Rats Crew', domain: 0, system: true, parent: 'mdtdungeon', types: ['MDT'], games: ['bfa']},
      'mdtdun16-crew1': {slug: 'pve/dungeons/freehold/blacktooth', i18n: 'Blacktooth Crew', domain: 0, system: true, parent: 'mdtdungeon', types: ['MDT'], games: ['bfa']},
      'mdtdun16-crew3': {slug: 'pve/dungeons/freehold/cutwater', i18n: 'Cutwater Crew', domain: 0, system: true, parent: 'mdtdungeon', types: ['MDT'], games: ['bfa']},
      'mdtdun17': {slug: 'pve/dungeons/kings-rest', i18n: 'warcraft:zones.9526', domain: 0, system: true, parent: 'mdtdungeon', types: ['MDT'], games: ['bfa']},
      'mdtdun18': {slug: 'pve/dungeons/shrine-of-the-storm', i18n: 'warcraft:zones.9525', domain: 0, system: true, parent: 'mdtdungeon', types: ['MDT'], games: ['bfa']},
      'mdtdun19': {slug: 'pve/dungeons/siege-of-boralus', i18n: 'warcraft:zones.9354', domain: 0, system: true, parent: 'mdtdungeon', types: ['MDT'], games: ['bfa']},
      'mdtdun19-faction2': {slug: 'pve/dungeons/siege-of-boralus/alliance', i18n: 'Alliance', domain: 0, system: true, parent: 'mdtdungeon', types: ['MDT'], games: ['bfa']},
      'mdtdun19-faction1': {slug: 'pve/dungeons/siege-of-boralus/horde', i18n: 'Horde', domain: 0, system: true, parent: 'mdtdungeon', types: ['MDT'], games: ['bfa']},
      'mdtdun20': {slug: 'pve/dungeons/temple-of-sethraliss', i18n: 'warcraft:zones.9527', domain: 0, system: true, parent: 'mdtdungeon', types: ['MDT'], games: ['bfa']},
      'mdtdun21': {slug: 'pve/dungeons/the-motherlode', i18n: 'warcraft:zones.8064', domain: 0, system: true, parent: 'mdtdungeon', types: ['MDT'], games: ['bfa']},
      'mdtdun22': {slug: 'pve/dungeons/the-underrot', i18n: 'warcraft:zones.9391', domain: 0, system: true, parent: 'mdtdungeon', types: ['MDT'], games: ['bfa']},
      'mdtdun23': {slug: 'pve/dungeons/tol-dagor', i18n: 'warcraft:zones.9327', domain: 0, system: true, parent: 'mdtdungeon', types: ['MDT'], games: ['bfa']},
      'mdtdun24': {slug: 'pve/dungeons/waycrest-manor', i18n: 'warcraft:zones.9424', domain: 0, system: true, parent: 'mdtdungeon', types: ['MDT'], games: ['bfa']},
      'mdtdun25': {slug: 'pve/dungeons/mechagon-junkyard', i18n: 'warcraft:zones.10225a', domain: 0, system: true, parent: 'mdtdungeon', types: ['MDT'], games: ['bfa']},
      'mdtdun26': {slug: 'pve/dungeons/mechagon-workshop', i18n: 'warcraft:zones.10225b', domain: 0, system: true, parent: 'mdtdungeon', types: ['MDT'], games: ['bfa']},
      'mdt-sldun29': {slug: 'pve/shadowlands-dungeons/de-other-side', i18n: 'warcraft:zones.DeOtherSide', domain: 0, system: true, parent: 'mdtdungeon', types: ['MDT'], games: ['sl']},
      'mdt-sldun30': {slug: 'pve/shadowlands-dungeons/halls-of-atonement', i18n: 'warcraft:zones.HallsOfAttonement', domain: 0, system: true, parent: 'mdtdungeon', types: ['MDT'], games: ['sl']},
      'mdt-sldun31': {slug: 'pve/shadowlands-dungeons/mists-of-tirna-scithe', i18n: 'warcraft:zones.MistsOfTirnaScithe', domain: 0, system: true, parent: 'mdtdungeon', types: ['MDT'], games: ['sl']},
      'mdt-sldun32': {slug: 'pve/shadowlands-dungeons/plaguefall', i18n: 'warcraft:zones.Plaguefall', domain: 0, system: true, parent: 'mdtdungeon', types: ['MDT'], games: ['sl']},
      'mdt-sldun33': {slug: 'pve/shadowlands-dungeons/sanguine-depths', i18n: 'warcraft:zones.SanguineDepths', domain: 0, system: true, parent: 'mdtdungeon', types: ['MDT'], games: ['sl']},
      'mdt-sldun34': {slug: 'pve/shadowlands-dungeons/spires-of-ascension', i18n: 'warcraft:zones.SpiresOfAscension', domain: 0, system: true, parent: 'mdtdungeon', types: ['MDT'], games: ['sl']},
      'mdt-sldun35': {slug: 'pve/shadowlands-dungeons/the-necrotic-wake', i18n: 'warcraft:zones.TheNecroticWake', domain: 0, system: true, parent: 'mdtdungeon', types: ['MDT'], games: ['sl']},
      'mdt-sldun36': {slug: 'pve/shadowlands-dungeons/theater-of-pain', i18n: 'warcraft:zones.TheaterOfPain', domain: 0, system: true, parent: 'mdtdungeon', types: ['MDT'], games: ['sl']},
      'mdtaffix': {slug: 'affixes', image: 'affixes.png', color: '#ef2254', i18n: 'Affixes', domain: 0, system: true, types: ['MDT']},
      'mdtaffix2': {slug: 'affixes/skittish', i18n: 'Skittish', domain: 0, system: true, parent: 'affixes', types: ['MDT']},
      'mdtaffix3': {slug: 'affixes/volcanic', i18n: 'Volcanic', domain: 0, system: true, parent: 'affixes', types: ['MDT']},
      'mdtaffix4': {slug: 'affixes/necrotic', i18n: 'Necrotic', domain: 0, system: true, parent: 'affixes', types: ['MDT']},
      'mdtaffix5': {slug: 'affixes/teeming', i18n: 'Teeming', domain: 0, system: true, parent: 'affixes', types: ['MDT']},
      'mdtaffix6': {slug: 'affixes/raging', i18n: 'Raging', domain: 0, system: true, parent: 'affixes', types: ['MDT']},
      'mdtaffix7': {slug: 'affixes/bolstering', i18n: 'Bolstering', domain: 0, system: true, parent: 'affixes', types: ['MDT']},
      'mdtaffix8': {slug: 'affixes/sanguine', i18n: 'Sanguine', domain: 0, system: true, parent: 'affixes', types: ['MDT']},
      'mdtaffix9': {slug: 'affixes/tyrannical', i18n: 'Tyrannical', domain: 0, system: true, parent: 'affixes', types: ['MDT']},
      'mdtaffix10': {slug: 'affixes/fortified', i18n: 'Fortified', domain: 0, system: true, parent: 'affixes', types: ['MDT']},
      'mdtaffix11': {slug: 'affixes/bursting', i18n: 'Bursting', domain: 0, system: true, parent: 'affixes', types: ['MDT']},
      'mdtaffix12': {slug: 'affixes/grievous', i18n: 'Grievous', domain: 0, system: true, parent: 'affixes', types: ['MDT']},
      'mdtaffix13': {slug: 'affixes/explosive', i18n: 'Explosive', domain: 0, system: true, parent: 'affixes', types: ['MDT']},
      'mdtaffix14': {slug: 'affixes/quaking', i18n: 'Quaking', domain: 0, system: true, parent: 'affixes', types: ['MDT']},
      'mdtaffix16': {slug: 'affixes/infested', i18n: 'Infested', domain: 0, system: true, parent: 'affixes', types: ['MDT']},
      'mdtaffix117': {slug: 'affixes/reaping', i18n: 'Reaping', domain: 0, system: true, parent: 'affixes', types: ['MDT']},
      'mdtaffix119': {slug: 'affixes/beguiling', i18n: 'Beguiling', domain: 0, system: true, parent: 'affixes', types: ['MDT']},
      'mdtaffix120': {slug: 'affixes/awakened', i18n: 'Awakened', domain: 0, system: true, parent: 'affixes', types: ['MDT']},
      'mdtaffix121': {slug: 'affixes/prideful', i18n: 'Prideful', domain: 0, system: true, parent: 'affixes', types: ['MDT']},
      'mdtaffix122': {slug: 'affixes/inspiring', i18n: 'Inspiring', domain: 0, system: true, parent: 'affixes', types: ['MDT']},
      'mdtaffix123': {slug: 'affixes/spiteful', i18n: 'Spiteful', domain: 0, system: true, parent: 'affixes', types: ['MDT']},
      'mdtaffix124': {slug: 'affixes/storming', i18n: 'Storming', domain: 0, system: true, parent: 'affixes', types: ['MDT']},
      // 'mdtaffix-bfa-s1-w1': {slug: 'affixes/s1/week1', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s1-w2': {slug: 'affixes/s1/week2', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s1-w3': {slug: 'affixes/s1/week3', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s1-w4': {slug: 'affixes/s1/week4', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s1-w5': {slug: 'affixes/s1/week5', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s1-w6': {slug: 'affixes/s1/week6', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s1-w7': {slug: 'affixes/s1/week7', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s1-w8': {slug: 'affixes/s1/week8', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s1-w9': {slug: 'affixes/s1/week9', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s1-w10': {slug: 'affixes/s1/week10', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s1-w11': {slug: 'affixes/s1/week11', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s1-w12': {slug: 'affixes/s1/week12', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s2-w1': {slug: 'affixes/s2/week1', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s2-w2': {slug: 'affixes/s2/week2', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s2-w3': {slug: 'affixes/s2/week3', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s2-w4': {slug: 'affixes/s2/week4', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s2-w5': {slug: 'affixes/s2/week5', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s2-w6': {slug: 'affixes/s2/week6', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s2-w7': {slug: 'affixes/s2/week7', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s2-w8': {slug: 'affixes/s2/week8', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s2-w9': {slug: 'affixes/s2/week9', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s2-w10': {slug: 'affixes/s2/week10', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s2-w11': {slug: 'affixes/s2/week11', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s2-w12': {slug: 'affixes/s2/week12', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s3-w1': {slug: 'affixes/s3/week1', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s3-w2': {slug: 'affixes/s3/week2', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s3-w3': {slug: 'affixes/s3/week3', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s3-w4': {slug: 'affixes/s3/week4', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s3-w5': {slug: 'affixes/s3/week5', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s3-w6': {slug: 'affixes/s3/week6', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s3-w7': {slug: 'affixes/s3/week7', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s3-w8': {slug: 'affixes/s3/week8', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s3-w9': {slug: 'affixes/s3/week9', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s3-w10': {slug: 'affixes/s3/week10', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s3-w11': {slug: 'affixes/s3/week11', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s3-w12': {slug: 'affixes/s3/week12', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s4-w1': {slug: 'affixes/s4/week1', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s4-w2': {slug: 'affixes/s4/week2', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s4-w3': {slug: 'affixes/s4/week3', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s4-w4': {slug: 'affixes/s4/week4', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s4-w5': {slug: 'affixes/s4/week5', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s4-w6': {slug: 'affixes/s4/week6', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s4-w7': {slug: 'affixes/s4/week7', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s4-w8': {slug: 'affixes/s4/week8', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s4-w9': {slug: 'affixes/s4/week9', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s4-w10': {slug: 'affixes/s4/week10', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s4-w11': {slug: 'affixes/s4/week11', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-bfa-s4-w12': {slug: 'affixes/s4/week12', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-sl-s1-w1': {slug: 'affixes/shadowlands-s1/week-1', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-sl-s1-w2': {slug: 'affixes/shadowlands-s1/week-2', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-sl-s1-w3': {slug: 'affixes/shadowlands-s1/week-3', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-sl-s1-w4': {slug: 'affixes/shadowlands-s1/week-4', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-sl-s1-w5': {slug: 'affixes/shadowlands-s1/week-5', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-sl-s1-w6': {slug: 'affixes/shadowlands-s1/week-6', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-sl-s1-w7': {slug: 'affixes/shadowlands-s1/week-7', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-sl-s1-w8': {slug: 'affixes/shadowlands-s1/week-8', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-sl-s1-w9': {slug: 'affixes/shadowlands-s1/week-9', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-sl-s1-w10': {slug: 'affixes/shadowlands-s1/week-10', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-sl-s1-w11': {slug: 'affixes/shadowlands-s1/week-11', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      // 'mdtaffix-sl-s1-w12': {slug: 'affixes/shadowlands-s1/week-12', i18n: '[-affix1-], [-affix2-], [-affix3-], [-affix4-]', domain: 0},
      'mdtspeed': {slug: 'speed', image: 'speed.png', color: '#42bce4', i18n: 'Speed', domain: 0, types: ['MDT']},
      'mdtspeed1': {slug: 'speed/easy-going', i18n: 'Easy Going', domain: 0, parent: 'speed', types: ['MDT']},
      'mdtspeed2': {slug: 'speed/gotta-go-fast', i18n: 'Gotta Go Fast', domain: 0, parent: 'speed', types: ['MDT']},
      'mdtspeed3': {slug: 'speed/racing-number-one', i18n: 'Racing for #1', domain: 0, parent: 'speed', types: ['MDT']},
      // 'mdtcl6': {slug: 'classes/death-knight', cls: 'cl-deathknight', color: '#123456', i18n: 'warcraft:classes.6', domain: 0},
      // 'mdtcl6-1': {slug: 'classes/death-knight/blood', cls: 'cl-deathknight', color: '#123456', i18n: 'warcraft:classes.6-1', domain: 0},
      // 'mdtcl6-2': {slug: 'classes/death-knight/frost', cls: 'cl-deathknight', color: '#123456', i18n: 'warcraft:classes.6-2', domain: 0},
      // 'mdtcl6-3': {slug: 'classes/death-knight/unholy', cls: 'cl-deathknight', color: '#123456', i18n: 'warcraft:classes.6-3', domain: 0},
      // 'mdtcl12': {slug: 'classes/demon-hunter', cls: 'cl-demonhunter', color: '#123456', i18n: 'warcraft:classes.12', domain: 0},
      // 'mdtcl12-1': {slug: 'classes/demon-hunter/havoc', cls: 'cl-demonhunter', color: '#123456', i18n: 'warcraft:classes.12-1', domain: 0},
      // 'mdtcl12-2': {slug: 'classes/demon-hunter/vengeance', cls: 'cl-demonhunter', color: '#123456', i18n: 'warcraft:classes.12-2', domain: 0},
      // 'mdtcl11': {slug: 'classes/druid', cls: 'cl-druid', color: '#123456', i18n: 'warcraft:classes.11', domain: 0},
      // 'mdtcl11-1': {slug: 'classes/druid/balance', cls: 'cl-druid', color: '#123456', i18n: 'warcraft:classes.11-1', domain: 0},
      // 'mdtcl11-2': {slug: 'classes/druid/feral', cls: 'cl-druid', color: '#123456', i18n: 'warcraft:classes.11-2', domain: 0},
      // 'mdtcl11-3': {slug: 'classes/druid/guardian', cls: 'cl-druid', color: '#123456', i18n: 'warcraft:classes.11-3', domain: 0},
      // 'mdtcl11-4': {slug: 'classes/druid/restoration', cls: 'cl-druid', color: '#123456', i18n: 'warcraft:classes.11-4', domain: 0},
      // 'mdtcl3': {slug: 'classes/hunter', cls: 'cl-hunter', color: '#123456', i18n: 'warcraft:classes.3', domain: 0},
      // 'mdtcl3-1': {slug: 'classes/hunter/beast-mastery', cls: 'cl-hunter', color: '#123456', i18n: 'warcraft:classes.3-1', domain: 0},
      // 'mdtcl3-2': {slug: 'classes/hunter/marksmanship', cls: 'cl-hunter', color: '#123456', i18n: 'warcraft:classes.3-2', domain: 0},
      // 'mdtcl3-3': {slug: 'classes/hunter/survival', cls: 'cl-hunter', color: '#123456', i18n: 'warcraft:classes.3-3', domain: 0},
      // 'mdtcl8': {slug: 'classes/mage', cls: 'cl-mage', color: '#123456', i18n: 'warcraft:classes.8', domain: 0},
      // 'mdtcl8-1': {slug: 'classes/mage/arcane', cls: 'cl-mage', color: '#123456', i18n: 'warcraft:classes.8-1', domain: 0},
      // 'mdtcl8-2': {slug: 'classes/mage/fire', cls: 'cl-mage', color: '#123456', i18n: 'warcraft:classes.8-2', domain: 0},
      // 'mdtcl8-3': {slug: 'classes/mage/frost', cls: 'cl-mage', color: '#123456', i18n: 'warcraft:classes.8-3', domain: 0},
      // 'mdtcl10': {slug: 'classes/monk', cls: 'cl-monk', color: '#123456', i18n: 'warcraft:classes.10', domain: 0},
      // 'mdtcl10-1': {slug: 'classes/monk/brewmaster', cls: 'cl-monk', color: '#123456', i18n: 'warcraft:classes.10-1', domain: 0},
      // 'mdtcl10-2': {slug: 'classes/monk/mistweaver', cls: 'cl-monk', color: '#123456', i18n: 'warcraft:classes.10-2', domain: 0},
      // 'mdtcl10-3': {slug: 'classes/monk/windwalker', cls: 'cl-monk', color: '#123456', i18n: 'warcraft:classes.10-3', domain: 0},
      // 'mdtcl2': {slug: 'classes/paladin', cls: 'cl-paladin', color: '#123456', i18n: 'warcraft:classes.2', domain: 0},
      // 'mdtcl2-1': {slug: 'classes/paladin/holy', cls: 'cl-paladin', color: '#123456', i18n: 'warcraft:classes.2-1', domain: 0},
      // 'mdtcl2-2': {slug: 'classes/paladin/protection', cls: 'cl-paladin', color: '#123456', i18n: 'warcraft:classes.2-2', domain: 0},
      // 'mdtcl2-3': {slug: 'classes/paladin/retribution', cls: 'cl-paladin', color: '#123456', i18n: 'warcraft:classes.2-3', domain: 0},
      // 'mdtcl5': {slug: 'classes/priest', cls: 'cl-priest', color: '#123456', i18n: 'warcraft:classes.5', domain: 0},
      // 'mdtcl5-1': {slug: 'classes/priest/discipline', cls: 'cl-priest', color: '#123456', i18n: 'warcraft:classes.5-1', domain: 0},
      // 'mdtcl5-2': {slug: 'classes/priest/holy', cls: 'cl-priest', color: '#123456', i18n: 'warcraft:classes.5-2', domain: 0},
      // 'mdtcl5-3': {slug: 'classes/priest/shadow', cls: 'cl-priest', color: '#123456', i18n: 'warcraft:classes.5-3', domain: 0},
      // 'mdtcl4': {slug: 'classes/rogue', cls: 'cl-rogue', color: '#123456', i18n: 'warcraft:classes.4', domain: 0},
      // 'mdtcl4-1': {slug: 'classes/rogue/assassination', cls: 'cl-rogue', color: '#123456', i18n: 'warcraft:classes.4-1', domain: 0},
      // 'mdtcl4-2': {slug: 'classes/rogue/outlaw', cls: 'cl-rogue', color: '#123456', i18n: 'warcraft:classes.4-2', domain: 0},
      // 'mdtcl4-3': {slug: 'classes/rogue/subtlety', cls: 'cl-rogue', color: '#123456', i18n: 'warcraft:classes.4-3', domain: 0},
      // 'mdtcl7': {slug: 'classes/shaman', cls: 'cl-shaman', color: '#123456', i18n: 'warcraft:classes.7', domain: 0},
      // 'mdtcl7-1': {slug: 'classes/shaman/elemental', cls: 'cl-shaman', color: '#123456', i18n: 'warcraft:classes.7-1', domain: 0},
      // 'mdtcl7-2': {slug: 'classes/shaman/enhancement', cls: 'cl-shaman', color: '#123456', i18n: 'warcraft:classes.7-2', domain: 0},
      // 'mdtcl7-3': {slug: 'classes/shaman/restoration', cls: 'cl-shaman', color: '#123456', i18n: 'warcraft:classes.7-3', domain: 0},
      // 'mdtcl9': {slug: 'classes/warlock', cls: 'cl-warlock', color: '#123456', i18n: 'warcraft:classes.9', domain: 0},
      // 'mdtcl9-1': {slug: 'classes/warlock/affliction', cls: 'cl-warlock', color: '#123456', i18n: 'warcraft:classes.9-1', domain: 0},
      // 'mdtcl9-2': {slug: 'classes/warlock/demonology', cls: 'cl-warlock', color: '#123456', i18n: 'warcraft:classes.9-2', domain: 0},
      // 'mdtcl9-3': {slug: 'classes/warlock/destruction', cls: 'cl-warlock', color: '#123456', i18n: 'warcraft:classes.9-3', domain: 0},
      // 'mdtcl1': {slug: 'classes/warrior', cls: 'cl-warrior', color: '#123456', i18n: 'warcraft:classes.1', domain: 0},
      // 'mdtcl1-1': {slug: 'classes/warrior/arms', cls: 'cl-warrior', color: '#123456', i18n: 'warcraft:classes.1-1', domain: 0},
      // 'mdtcl1-2': {slug: 'classes/warrior/fury', cls: 'cl-warrior', color: '#123456', i18n: 'warcraft:classes.1-2', domain: 0},
      // 'mdtcl1-3': {slug: 'classes/warrior/protection', cls: 'cl-warrior', color: '#123456', i18n: 'warcraft:classes.1-3', domain: 0},

      'snip0': {slug: 'snippets', image: 'snippets.png', color: '#d18cf3', i18n: 'Code Snippets', domain: 0, types: ['SNIPPET']},
      'snip1': {slug: 'snippets/libraries', i18n: 'Libraries', domain: 0, parent: 'snip0', types: ['SNIPPET']},
      'snip2': {slug: 'snippets/tutorials', i18n: 'Tutorials', domain: 0, parent: 'snip0', types: ['SNIPPET']},

      'opie1': {slug: 'group-buffs', image: 'opie.png', color: '#2595E6', i18n: 'Group Buffs', domain: 0, types: ['OPIE']},
      'opie2': {slug: 'consumables', image: 'opie.png', color: '#2595E6', i18n: 'Consumables', domain: 0, types: ['OPIE']},
      'opie3': {slug: 'vehicles', image: 'opie.png', color: '#2595E6', i18n: 'Vehicles', domain: 0, types: ['OPIE']},
      'opie4': {slug: 'equipment', image: 'opie.png', color: '#2595E6', i18n: 'Equipment', domain: 0, types: ['OPIE']},
      'opie5': {slug: 'equipment/trinkets', image: 'opie.png', color: '#2595E6', i18n: 'Trinkets', domain: 0, types: ['OPIE']},
      'opie6': {slug: 'utility', image: 'opie.png', color: '#2595E6', i18n: 'Utility', domain: 0, types: ['OPIE']},

      'plater1': {slug: 'plater-profiles', image: 'plater.png', color: '#FFC972', i18n: 'Plater Profiles', domain: 0, system: true, types: ['PLATER']},
      'plater2': {slug: 'plater-scripts', image: 'plater.png', color: '#FFC972', i18n: 'Plater Scripts', domain: 0, system: true, types: ['PLATER']},
      'plater3': {slug: 'plater-mods', image: 'plater.png', color: '#FFC972', i18n: 'Plater Mods', domain: 0, system: true, types: ['PLATER']},
      'plater4': {slug: 'plater-animations', image: 'plater.png', color: '#FFC972', i18n: 'Plater Animations', domain: 0, system: true, types: ['PLATER']},
      'plater5': {slug: 'plater-npc-colors', image: 'plater.png', color: '#FFC972', i18n: 'Plater NPC Colors', domain: 0, system: true, types: ['PLATER']},

      'platerutilities': {slug: 'utilities', image: 'snippets.png', color: '#d18cf3', i18n: 'Utilities', domain: 0, types: ['PLATER']},
      'platerdungeons': {slug: 'dungeons', image: 'snippets.png', color: '#d18cf3', i18n: 'Dungeons', domain: 0, types: ['PLATER']},
      'platerpvp': {slug: 'pvp', image: 'snippets.png', color: '#d18cf3', i18n: 'PvP', domain: 0, types: ['PLATER']},
      'platertorghast': {slug: 'torghast', image: 'snippets.png', color: '#d18cf3', i18n: 'warcraft:zones.Torghast', domain: 0, types: ['PLATER']},
      'platernathria': {slug: 'castle-nathria', image: 'snippets.png', color: '#d18cf3', i18n: 'warcraft:zones.CastleNathria', domain: 0, types: ['PLATER']},
      'platersanctumdominion': {slug: 'sanctum-of-dominion', image: 'snippets.png', color: '#d18cf3', i18n: 'warcraft:zones.SanctumOfDomination', domain: 0, types: ['PLATER']},
      'platerraidzuldazar': {slug: 'battle-of-zuldazar', image: 'snippets.png', color: '#d18cf3', i18n: 'warcraft:zones.10076', domain: 0, types: ['PLATER']},
      'platerraidcrucible': {slug: 'crucible-of-storms', image: 'snippets.png', color: '#d18cf3', i18n: 'warcraft:zones.10057', domain: 0, types: ['PLATER']},
      'platerraiduldir': {slug: 'uldir', image: 'snippets.png', color: '#d18cf3', i18n: 'warcraft:zones.9389', domain: 0, types: ['PLATER']},
      'platerraideternalpalace': {slug: 'the-eternal-palace', image: 'snippets.png', color: '#d18cf3', i18n: 'warcraft:zones.10425', domain: 0, types: ['PLATER']},
      'platerraidnyalotha': {slug: 'nyalotha', image: 'snippets.png', color: '#d18cf3', i18n: 'warcraft:zones.nyalotha', domain: 0, types: ['PLATER']},

      'totalrp1': {slug: 'campaigns', image: 'trpcamp.png', color: '#C3793A', i18n: 'Campaigns', domain: 0, types: ['TOTALRP3']},
      'totalrp2': {slug: 'campaigns/alliance-campaigns', i18n: 'Alliance Campaigns', domain: 0, parent: 'totalrp1', types: ['TOTALRP3']},
      'totalrp3': {slug: 'campaigns/horde-campaigns', i18n: 'Horde Campaigns', domain: 0, parent: 'totalrp1', types: ['TOTALRP3']},
      'totalrp4': {slug: 'items', image: 'equipment.png', color: '#7ED321', i18n: 'Items', domain: 0, types: ['TOTALRP3']},
      'totalrp6': {slug: 'items/containers', i18n: 'Containers', domain: 0, parent: 'totalrp4', types: ['TOTALRP3']},
      'totalrp7': {slug: 'items/documents', i18n: 'Documents', domain: 0, parent: 'totalrp4', types: ['TOTALRP3']},
      'totalrp8': {slug: 'items/equipment', i18n: 'Equipment', domain: 0, parent: 'totalrp4', types: ['TOTALRP3']},
      'totalrp9': {slug: 'items/expert-mode', i18n: 'Expert Mode', domain: 0, parent: 'totalrp4', types: ['TOTALRP3']},
      'totalrp10': {slug: 'items/normal-mode', i18n: 'Normal Mode', domain: 0, parent: 'totalrp4', types: ['TOTALRP3']},
      'totalrp11': {slug: 'items/miscellaneous', i18n: 'Miscellaneous', domain: 0, parent: 'totalrp4', types: ['TOTALRP3']},
      'totalrp12': {slug: 'items/toys', i18n: 'Toys', domain: 0, parent: 'totalrp4', types: ['TOTALRP3']},
      'rplang1': {slug: 'english', image: 'lang.png', color: '#269C7D', i18n: 'English', domain: 0, types: ['TOTALRP3']},
      'rplang2': {slug: 'french', image: 'lang.png', color: '#269C7D', i18n: 'French', domain: 0, types: ['TOTALRP3']},
      'rplang3': {slug: 'spanish', image: 'lang.png', color: '#269C7D', i18n: 'Spanish', domain: 0, types: ['TOTALRP3']},
      'rplang4': {slug: 'german', image: 'lang.png', color: '#269C7D', i18n: 'German', domain: 0, types: ['TOTALRP3']},

      'vuhdo1': {slug: 'profiles', image: 'vuhdo.png', color: '#6BB85E', i18n: 'Vuhdo Profiles', domain: 0, system: true, types: ['VUHDO']},
      'vuhdo2': {slug: 'bouquets', image: 'vuhdo.png', color: '#6BB85E', i18n: 'Vuhdo Bouquets', domain: 0, system: true, types: ['VUHDO']},
      'vuhdo3': {slug: 'key-layouts', image: 'vuhdo.png', color: '#6BB85E', i18n: 'Vuhdo Key Layouts', domain: 0, system: true, types: ['VUHDO']},

      ///////////////////////////////////////////////////////
      // FINAL FANTASY CATEGORIES
      ///////////////////////////////////////////////////////
      'job-pld': {slug: 'paladin', image: '/ffxiv/PLD.svg', color: '#a8d2e6', i18n: 'ffxiv:Paladin', domain: 1, types: ['DELVUI']},
      'job-war': {slug: 'warrior', image: '/ffxiv/WAR.svg', color: '#cf2621', i18n: 'ffxiv:Warrior', domain: 1, types: ['DELVUI']},
      'job-drk': {slug: 'dark-knight', image: '/ffxiv/DRK.svg', color: '#d126cc', i18n: 'ffxiv:Dark Knight', domain: 1, types: ['DELVUI']},
      'job-gnb': {slug: 'gunbreaker', image: '/ffxiv/GNB.svg', color: '#998d50', i18n: 'ffxiv:Gunbreaker', domain: 1, types: ['DELVUI']},

      'job-sch': {slug: 'scholar', image: '/ffxiv/SCH.svg', color: '#8657ff', i18n: 'ffxiv:Scholar', domain: 1, types: ['DELVUI']},
      'job-whm': {slug: 'white-mage', image: '/ffxiv/WHM.svg', color: '#fff0dc', i18n: 'ffxiv:White Mage', domain: 1, types: ['DELVUI']},
      'job-ast': {slug: 'astrologian', image: '/ffxiv/AST.svg', color: '#ffe74a', i18n: 'ffxiv:Astrologian', domain: 1, types: ['DELVUI']},

      'job-mnk': {slug: 'monk', image: '/ffxiv/MNK.svg', color: '#d69c00', i18n: 'ffxiv:Monk', domain: 1, types: ['DELVUI']},
      'job-drg': {slug: 'dragoon', image: '/ffxiv/DRG.svg', color: '#4164cd', i18n: 'ffxiv:Dragoon', domain: 1, types: ['DELVUI']},
      'job-nin': {slug: 'ninja', image: '/ffxiv/NIN.svg', color: '#af1964', i18n: 'ffxiv:Ninja', domain: 1, types: ['DELVUI']},
      'job-sam': {slug: 'samurai', image: '/ffxiv/SAM.svg', color: '#e46d04', i18n: 'ffxiv:Samurai', domain: 1, types: ['DELVUI']},

      'job-blm': {slug: 'black-mage', image: '/ffxiv/BLM.svg', color: '#a579d6', i18n: 'ffxiv:Black Mage', domain: 1, types: ['DELVUI']},
      'job-smn': {slug: 'summoner', image: '/ffxiv/SMN.svg', color: '#2d9b78', i18n: 'ffxiv:Summoner', domain: 1, types: ['DELVUI']},
      'job-rdm': {slug: 'red-mage', image: '/ffxiv/RDM.svg', color: '#e87b7b', i18n: 'ffxiv:Red Mage', domain: 1, types: ['DELVUI']},
      'job-blu': {slug: 'blue-mage', image: '/ffxiv/BLU.svg', color: '#2459ff', i18n: 'ffxiv:Blue Mage', domain: 1, types: ['DELVUI']},

      'job-brd': {slug: 'bard', image: '/ffxiv/BRD.svg', color: '#91ba5e', i18n: 'ffxiv:Bard', domain: 1, types: ['DELVUI']},
      'job-mch': {slug: 'machinist', image: '/ffxiv/MCH.svg', color: '#6ee1d6', i18n: 'ffxiv:Machinist', domain: 1, types: ['DELVUI']},
      'job-dnc': {slug: 'dancer', image: '/ffxiv/DNC.svg', color: '#e2b0af', i18n: 'ffxiv:Dancer', domain: 1, types: ['DELVUI']},

      'delvui1': {slug: 'general-settings', image: '/ffxiv/delvui.png', color: '#FDFDFD', i18n: 'General Settings', domain: 1, system: true, types: ['DELVUI']},
      'delvui2': {slug: 'job-specific', image: '/ffxiv/delvui.png', color: '#FDFDFD', i18n: 'Job Specific', domain: 1, system: true, types: ['DELVUI']},
      'delvui3': {slug: 'job-pack', image: '/ffxiv/delvui.png', color: '#FDFDFD', i18n: 'Job Pack', domain: 1, system: true, types: ['DELVUI']},
      'delvui4': {slug: 'general-hud-config', image: '/ffxiv/delvui.png', color: '#FDFDFD', i18n: 'General Hud Config', domain: 1, system: true, types: ['DELVUI']},
    }
  }

/*

body.ff .Archer,body.ff .Bard {
    color: #91ba5e!important
}



body.ff .Machinist {
    color: #6ee1d6!important
}

body.ff .Arcanist,body.ff .Arcanist:hover,body.ff .Summoner,body.ff .Summoner:hover {
    color: #2d9b78!important
}

body.ff .BlackMage,body.ff .Thamauturge {
    color: #a579d6!important
}

body.ff .RedMage {
    color: #e87b7b!important
}


body.ff .Dancer {
    color: #e2b0af!important
}

body.ff .BlueMage {
    color: #2459ff!important
}*/


  init (t) {
    if (!t) {
      t = window.i18next.t
    }

    let styles = ''
    let sort = 0
    for (const [id, cat] of Object.entries(this.categories)) {
      this.categories[id].id = id
      this.categories[id].text = t(cat.i18n)
      this.categories[id].sortVal = sort++

      let color = this.getAttr(cat, 'color')
      let image = this.getAttr(cat, 'image')
      if (!color || !image) {
        continue
      }
      styles += `
      .md-chip.${id}, .${id} .menu-image, .search-input .ql-editor .search-tag.category.${id} {color:${color}; background-image:url('/static/image/menu/${image}')}
      .${id}, .${id} a {color:${color}!important}
      .search-tag.${id} {border-color:${color}}
      .multiselect .md-chip.${id} {background: ${color}; color: black!important}`
    }

    const css = document.createElement('style')
    if (css.styleSheet) {
      css.styleSheet.cssText = styles
    }
    else {
      css.appendChild(document.createTextNode(styles))
    }
    document.getElementsByTagName('head')[0].appendChild(css)
  }

  translate (t) {
    let copy = {}
    for (const [id, cat] of Object.entries(this.categories)) {
      copy[id] = cat
      copy[id].text = t(cat.i18n)
    }
    return copy
  }

  match (item) {
    if (this.categories[item]) {
      return this.categories[item]
    }
    for (const cat of Object.values(this.categories)) {
      if (cat.text === item || cat.i18n === item) {
        return cat
      }
    }
    return null
  }

  matchChildren (parent, addon, game) {
    if (!parent) return []
    let children = []
    for (const cat of Object.values(this.categories)) {
      if (cat.parent === parent && (!addon || !cat.types || cat.types.indexOf(addon) >= 0) && (!game || !cat.games || cat.games.indexOf(game) >= 0)) {
        children.push(cat)
      }
    }
    return children
  }

  search (str, addon, game) {
    let findStr = normalize(str)
    addon = (addon || '').toUpperCase()
    game = (game || '').toLowerCase()
    for (const [id, cat] of Object.entries(this.categories)) {
      if ((findStr === normalize(cat.i18n) || findStr === normalize(cat.text) || findStr === normalize(cat.slug)) && (!addon || !cat.types || cat.types.indexOf(addon) >= 0) && (!game || !cat.games || cat.games.indexOf(game) >= 0)) {
        return cat
      }
    }

    if (str.match(/\./) && !str.match(/warcraft:/)) {
      return this.search('warcraft:' + str, addon, game)
    }
    return null
  }

  findMDTSeason (a1, a2, a3, a4) {
    if (parseInt(a1)) {
      a1 = 'mdtaffix' + a1
    }
    if (parseInt(a2)) {
      a2 = 'mdtaffix' + a2
    }
    if (parseInt(a3)) {
      a3 = 'mdtaffix' + a3
    }
    if (parseInt(a4)) {
      a4 = 'mdtaffix' + a4
    }
    for (const [id, cat] of Object.entries(this.categories)) {
      if (!cat.contains) {
        continue
      }
      if (cat.contains.indexOf(a1) >= 0 && cat.contains.indexOf(a2) >= 0 && cat.contains.indexOf(a3) >= 0 && cat.contains.indexOf(a4) >= 0) {
        try {
          return id.match(/mdtaffix-(\w+-s\d+)-/)[1]
        }
        catch (e) {
        }
      }
    }
    return null
  }

  getMDTAffixOptions (season) {
    var regex = new RegExp('^mdtaffix-' + season + '-')
    var opts = []
    for (const [id, cat] of Object.entries(this.categories)) {
      if (!cat.contains || !id.match(regex)) {
        continue
      }
      opts.push(cat.contains.map((x) => {
        return parseInt(x.replace(/[^\d]/g, ''))
      }))
    }
    return opts
  }

  classCategories (addon, game) {
    let classes = []
    for (const [id, cat] of Object.entries(this.categories)) {
      if (!cat.parent && id.match(/^cl\d/) && (!addon || !cat.types || cat.types.indexOf(addon) >= 0) && (!game || !cat.games || cat.games.indexOf(game) >= 0)) {
        cat.specs = this.matchChildren(id, addon, game)
        classes.push(cat)
      }
    }

    classes.sort(function (a, b) {
      if (a.text < b.text) {
        return -1
      }
      else {
        return 1
      }
    })

    return classes
  }

  raidCategories (zones) {
    let raids = []
    zones.forEach((zone) => {
      let z = this.match(zone)
      if (z) {
        z.bosses = this.matchChildren(z.id)
        raids.push(z)
      }
    })

    return raids
  }

  professionCategories (addon, game) {
    let gathering = this.categories.prof1
    gathering.specs = this.matchChildren('prof1', addon, game)

    let crafting = this.categories.prof5
    crafting.specs = this.matchChildren('prof5', addon, game)

    let secondary = this.categories.prof14
    secondary.specs = this.matchChildren('prof14', addon, game)

    return [crafting, gathering, secondary]
  }

  rootCategories (addon, game, domain) {
    let roots = []
    console.log('domain=', domain)
    for (const cat of Object.values(this.categories)) {
      if (!cat.parent && !cat.system && cat.domain === domain && (!addon || !cat.types || cat.types.indexOf(addon) >= 0) && (!game || !cat.games || cat.games.indexOf(game) >= 0)) {
        roots.push(cat)
      }
    }
    return roots
  }

  validateCategories (cats) {
    let valid = []
    for (const cat of cats) {
      if (this.categories[cat]) {
        valid.push(cat)
        if (this.categories[cat].parent) {
          valid.push(this.categories[cat].parent)
        }
      }
    }

    return [...new Set(valid)]
  }

  filterSystemTags (cats) {
    let systemTags = []
    for (const cat of cats) {
      if (this.categories[cat] && this.categories[cat].system) {
        systemTags.push(cat)
      }
    }

    return [...new Set(systemTags)]
  }

  getCategories (cats, doNotSortAlpha, addon, game) {
    var selected = []
    if (!Array.isArray(cats)) {
      cats = [cats]
    }
    console.log(cats)
    for (const search of cats) {
      for (const [id, cat] of Object.entries(this.categories)) {
        if (((search instanceof RegExp && id.match(search)) || search === id) && (!addon || !cat.types || cat.types.indexOf(addon) >= 0) && (!game || !cat.games || cat.games.indexOf(game) >= 0)) {
          selected.push(cat)
        }
      }
    }

    console.log(selected)

    if (!doNotSortAlpha) {
      selected.sort(function (a, b) {
        if (a.text < b.text) {
          return -1
        }
        return 1
      })
    }
    return selected
  }

  getClones (id, addon) {
    const base = this.categories[id]
    if (!base) {
      return []
    }

    const cats = this.categories(false)
    var clones = []
    cats.forEach((cat) => {
      if (cat.text === base.text && (!addon || cat[addon])) {
        clones.push(cat.id)
      }
    })
    return clones
  }

  groupSets (cats) {
    var groups = []
    var current = []
    cats.forEach((cat) => {
      if (cat.system) {
        return
      }
      if (cat.root) {
        if (current.length > 0) {
          groups.push(current)
        }
        current = []
      }
      current.push(cat)
    })
    if (current.length > 0) {
      groups.push(current)
    }
    return groups
  }

  relevanceScores (cats) {
    var scores = {
      standard: 0,
      strict: 0
    }
    for (const cat of cats) {
      if (!this.categories[cat] || this.categories[cat].system) {
        continue
      }
      scores.strict++
      if (!this.categories[cat].parent) {
        scores.standard++
      }
    }
    return scores
  }

  getAttr (cat, attr) {
    if (cat[attr]) {
      return cat[attr]
    }
    else if (cat.parent && this.categories[cat.parent] && this.categories[cat.parent][attr]) {
      return this.categories[cat.parent][attr]
    }
    return null
  }
}

module.exports = new Categories()