const pets = ['Milo', 'Otis', 'Garfield']

const append = [...pets.slice(), 'Odie'],
      prepend = ['Odie', ...pets.slice()],
      removeLast = [...pets.slice(0, -1)],
      removeFirst = [...pets.slice(1)]
