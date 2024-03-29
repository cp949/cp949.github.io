module.exports = {
    parser: 'typescript',
    printWidth: 120,
    tabWidth: 4,
    trailingComma: 'all',
    singleQuote: true,
    bracketSpacing: true,
    semi: false,
    useTabs: false,
    arrowParens: 'always',
    endOfLine: 'auto',
    proseWrap: 'preserve',
    overrides: [
        {
            files: '*.json',
            options: {
                printWidth: 200,
                tabWidth: 2,
            },
        },
    ], // 특정 파일별로 옵션을 다르게 지정함, ESLint 방식 사용
}
