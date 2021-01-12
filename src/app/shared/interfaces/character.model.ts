export interface Character {
  readonly id: number;
  readonly name: string;
  readonly status: 'alive' | 'dead' | 'unknown';
  readonly species: 'Human' | 'Humanoid' | 'Alien' | 'Poopybutthole' | 'Mytholog' | 'Animal' | 'Vampire' | 'Robot' | 'Cronenberg' | 'Disease' | 'unknown';
  readonly type: string;
  readonly gender: 'female' | 'male' | 'genderless' | 'unknown';
  readonly origin: {
    readonly name: string;
    readonly url: string;
  };
  readonly location: {
    readonly name: string;
    readonly url: string;
  };
  readonly image: string;
  readonly episode: string[];
  readonly url: string;
  readonly created: string;
}
