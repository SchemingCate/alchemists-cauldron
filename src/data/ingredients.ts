import type { IIngredient } from '../helpers/types';

import dragonTearsImg from '../assets/images/icons/ingredients/dragon-tears.svg';
import fairyDustImg from '../assets/images/icons/ingredients/fairy-dust.svg';
import frostLotusImg from '../assets/images/icons/ingredients/frost-lotus.svg';
import mandrakeRootImg from '../assets/images/icons/ingredients/mandrake-root.svg';
import causticAcidImg from '../assets/images/icons/ingredients/caustic-acid.svg';
import voidEssenceImg from '../assets/images/icons/ingredients/essence-of-the-void.svg';
import phoenixImg from '../assets/images/icons/ingredients/phoenix-feather.svg';
import toadSlime from '../assets/images/icons/ingredients/toad-slime.svg';

export const INGREDIENTS: IIngredient[] = [
  {
    id: 'dragon-tears',
    name: 'Dragon Tears',
    icon: dragonTearsImg,
    temperature: 25,
    density: 8,
    magicPower: 10,
  },
  {
    id: 'fairy-dust',
    name: 'Fairy Dust',
    icon: fairyDustImg,
    temperature: 12,
    density: 9,
    magicPower: 12,
  },
  {
    id: 'frost-lotus',
    name: 'Frost Lotus',
    icon: frostLotusImg,
    temperature: -18,
    density: 4,
    magicPower: 14,
  },
  {
    id: 'mandrake-root',
    name: 'Mandrake Root',
    icon: mandrakeRootImg,
    temperature: -5,
    density: 20,
    magicPower: 8,
  },
  {
    id: 'caustic-acid',
    name: 'Caustic Acid',
    icon: causticAcidImg,
    temperature: 10,
    density: 14,
    magicPower: 22,
  },
  {
    id: 'void-essence',
    name: 'Essence of the Void',
    icon: voidEssenceImg,
    temperature: -20,
    density: -10,
    magicPower: 40,
  },
  {
    id: 'phoenix-feather',
    name: 'Phoenix Feather',
    icon: phoenixImg,
    temperature: 50,
    density: -10,
    magicPower: 30,
  },
  {
    id: 'toad-slime',
    name: 'Toad Slime',
    icon: toadSlime,
    temperature: 5,
    density: 30,
    magicPower: 0,
  },
];
