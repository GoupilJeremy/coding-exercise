
 function getFirstNamesAndLastNames(lines) {
    return lines.filter(line => line.includes('--'))
        .map(line => line.split('--')
        .filter(line => line.includes(',')));
}

test('get first names, last names', () => {
    // given
    const lines = [
        "Schuppe, Suzanne -- velit Expedita nihil ad aut similique facilis numquam blanditiis.",
        "Cronin, Bella -- tempore Omnis quos veritatis ea sequi est nostrum.",
        "Ex eum architecto ab vel non pariatur."
    ];
    const expectedFirstNamesAndLastNames = [
        ["Schuppe, Suzanne "],
        ["Cronin, Bella "]
    ];

    // when
    const firstNamesAndLastNames  = getFirstNamesAndLastNames(lines);

    // then
    expect(firstNamesAndLastNames).toStrictEqual(expectedFirstNamesAndLastNames);
});

function getFirstNames(firstNamesAndLastNames) {
    return firstNamesAndLastNames
    .map( firstNameAndLastName => firstNameAndLastName.split(',')[0]);
}

test('get first names', () => {
    // given
    const firstNamesAndLastNames = ["Schuppe, Suzanne "];

    const expectedFirstNames = [
        "Schuppe"
    ];

    //when
    const firstNames = getFirstNames(firstNamesAndLastNames);

    // then
    expect(firstNames).toStrictEqual(expectedFirstNames);
});