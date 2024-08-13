package com.example.move.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.util.Date;
import lombok.Data;

/**
 * 一个项目中使用的车辆表
 * @TableName car_project
 */
@TableName(value ="car_project")
@Data
public class CarProject implements Serializable {
    /**
     * 车辆id
     */
    @TableId
    private Integer carId;

    /**
     * 项目id
     */
    private Integer projectId;

    /**
     * 车辆使用起始时间
     */
    private Date carStartTime;

    /**
     * 车辆使用截止时间
     */
    private Date carEndTime;

    /**
     * 车辆负责人id
     */
    private Integer carPersonalId;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}