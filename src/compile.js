const fs = require('fs');
const path = require('path');
const ts = require('typescript');

// Função para ler um arquivo e adicionar o conteúdo ao arquivo de saída
function appendFileContent(filePath, outFile) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const fileName = path.basename(filePath);
    const relativePath = path.relative(process.cwd(), filePath);
    
    outFile.write(`// Arquivo: ${relativePath}\n`);
    outFile.write(content);
    outFile.write('\n\n');
}

// Função para percorrer pastas e subpastas em busca de arquivos .ts e .tsx
function traverseDirectories(dir, fileExtensionPattern, fileList) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory() && !filePath.includes('node_modules')) {
            traverseDirectories(filePath, fileExtensionPattern, fileList);
        } else if (fileExtensionPattern.test(file)) {
            fileList.push(filePath);
        }
    });
}

// Encontre todos os arquivos .ts e .tsx em todas as pastas e subpastas, ignorando node_modules
const fileExtensionPattern = /\.(ts|tsx)$/i;
const filesToMerge = [];
traverseDirectories(process.cwd(), fileExtensionPattern, filesToMerge);

// Nome do arquivo de saída
const outFileName = 'merged-output.ts';
const outFilePath = path.join(process.cwd(), outFileName);

// Compilar e mesclar os arquivos
function compileAndMergeFiles(filePaths, outFilePath) {
    const outFile = fs.createWriteStream(outFilePath);
    
    outFile.write('// Código fonte do projeto Flow\n\n');
    
    filePaths.forEach(filePath => {
        appendFileContent(filePath, outFile);
    });

    outFile.end();
}

// Compilar e mesclar os arquivos
compileAndMergeFiles(filesToMerge, outFilePath);

console.log(`Arquivos mesclados e compilados em: ${outFilePath}`);