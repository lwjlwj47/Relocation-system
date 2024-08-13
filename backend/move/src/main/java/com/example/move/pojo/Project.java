package com.example.move.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.util.Date;
import lombok.Data;

/**
 * 项目表
 * @TableName project
 */
@TableName(value ="project")
@Data
public class Project implements Serializable {
    /**
     * 项目id
     */
    @TableId(type = IdType.AUTO)
    private Integer projectId;

    /**
     * 项目等级
     */
    private Integer projectGrade;

    /**
     * 项目名称
     */
    private String projectName;

    /**
     * 项目甲方负责人
     */
    private String projectFirstPerson;

    /**
     * 项目乙方负责人
     */
    private String projectSecondPerson;

    /**
     * 开始时间
     */
    private Date projectStartTime;

    /**
     * 结束时间
     */
    private Date projectEndTime;

    /**
     * 项目备注
     */
    private String projectRemark;

    /**
     * 项目结束标志
     */
    private Integer projectIsDone;

    /**
     * 项目所属单位
     */
    private String projectUnit;


    /**
     * 项目所属单位类别，1为高校，2为事业单位
     */
    private String projectUnitType;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;


}