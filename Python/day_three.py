def most_frequent_char(s):
  characters = {}
  for letter in s:
    if letter not in characters:
      characters[letter] = 1
    else:
      characters[letter] += 1
  max_value = 0
  max_key = ""
  for key, value in characters.items():
    if value > max_value:
      max_value = value
      max_key = key
  return max_key


def pair_sum(numbers, target_sum):
    for x in range(len(numbers)-1):
        for y in range(1, len(numbers)):
            if numbers[x] + numbers[y] == target_sum:
                return (x, y)
