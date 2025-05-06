#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 配置项
dist_path=docs/.vuepress/dist   # 打包生成的文件夹路径
push_branch=gh-pages            # 推送的分支
commit_info=$(git describe --all --always --long)
push_addr=$(git remote get-url --push origin)  # 自动获取远程地址

# 1. 构建静态文件
echo "🏗️ 正在构建项目..."
npm run build

# 2. 进入 dist 文件夹并部署
cd $dist_path

echo "📦 初始化 git 并提交到 $push_branch 分支"
git init
git config user.name "$(git log -1 --pretty=format:'%an')"
git config user.email "$(git log -1 --pretty=format:'%ae')"
git add -A
git commit -m "deploy: $commit_info"

# 将 token 注入远程地址（如果在 CI 中使用）
if [ -n "$ACCESS_TOKEN" ]; then
  push_addr=$(echo $push_addr | sed "s/https:\/\/github.com/https:\/\/$ACCESS_TOKEN@github.com/")
fi

# 推送到 gh-pages 分支
git push -f "$push_addr" HEAD:$push_branch

# 返回原始目录
cd -

# 清理
rm -rf $dist_path

echo "🎉 部署完成！"