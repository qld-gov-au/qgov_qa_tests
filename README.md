# Quality control tests

A selection of tests for quality control checking.

These tests use the [QUnit](http://qunitjs.com/) unit testing framework to flag potential issues in web content including editorial style, information architecture and application of content patterns.

Unit tests are pass/fail by nature. Where possible, tests should be written to fail on known issues. It is possible to 'fail' a test to flag a potential issue for manual review, but this may decrease confidence in the overall test process.

To improve the user interface, content that fails a test has been flagged should be highlighted in the page so it is easier for the author to find and review. Highlighting is provided by the excellent [jQuery.highlightRegex](https://github.com/jbr/jQuery.highlightRegex) plugin.

### Writing a new test

Tests compare an _expected value_ with an _actual value_. For example, to test that links are no longer than 7 words, this tool examines each link in turn. It treats the first part of the link (up to 7 words) as the expected value, then compares it to the actual link text. If they are the same, the test has passed. If they are different, the test fails and QUnit will highlight the difference between the values (the extra words). Thinking about the 'expected' and 'actual' values when planning new tests will greatly improve usability!

For more general information on unit testing, you can find many guides online. Example: [Introduction to Unit Testing](http://qunitjs.com/intro/)
