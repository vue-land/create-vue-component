import path from 'path'
import test from 'ava'
import sao from 'sao'

const template = path.join(__dirname, '..')

test('defaults', async t => {
  const stream = await sao.mockPrompt(template, {
    // To make local and CI generate same result
    // We need to use fake data for these fields
    author: 'fake-name',
    gitUser: 'fake-name',
    email: 'fake-email',
    description: 'lol'
  })
  t.snapshot(stream.meta.merged, 'template data')
  t.snapshot(stream.fileContents('README.md'), 'readme')
  t.snapshot(stream.fileContents('package.json'), 'package.json')
  t.snapshot(stream.fileContents('circle.yml'), 'circle.yml')
  t.snapshot(stream.fileList, 'files')
})
