import * as glob from 'glob';

import { devlog } from '../../utils/logger';
import {
  Config,
  ExtractionResult,
  ExtractorConfig,
  ScopeMap,
} from '../../types';
import { initExtraction } from '../../utils/init-extraction';

export function extractKeys(
  { input, scopes, defaultValue, files }: Config,
  fileType: 'ts' | 'html',
  extractor: (config: ExtractorConfig) => ScopeMap
): ExtractionResult {
  let { scopeToKeys } = initExtraction();

  const fileList =
    files || input.map((path) => glob.sync(`${path}/**/*.${fileType}`)).flat();

  for (const file of fileList) {
    devlog('extraction', 'Extracting keys', { file, fileType });
    scopeToKeys = extractor({ file, defaultValue, scopes, scopeToKeys });
  }

  return { scopeToKeys, fileCount: fileList.length };
}
