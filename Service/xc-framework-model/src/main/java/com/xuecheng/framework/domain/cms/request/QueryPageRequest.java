package com.xuecheng.framework.domain.cms.request;

import lombok.Data;

/**
 * 2019-2-8
 */
@Data
public class QueryPageRequest {
    // 接收页面查询的查询条件

    // 站点 ID
    private String siteId;

    // 页面 ID
    private String pageId;

    // 页面名称
    private String pageName;

    // 别名
    private String pageAliase;

    // 模板 ID
    private String templateId;
}
